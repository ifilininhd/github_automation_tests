import { expect } from '@playwright/test'
import { SignUpPage } from './pages/sign-up-page'
import { MainPage } from './pages/main-page'
import { test } from './fixtures/fixture-test'
import { parse } from 'csv-parse/sync'
import * as fs from 'fs'
import * as path from 'path'

const wrong_auth = parse(fs.readFileSync(path.join(__dirname, 'resources/failedAuthorization.csv')), {
    columns: true,
    skip_empty_lines: true,
})

test('QC-1. Success sign up', async ({ page }) => {
    const main = new MainPage(page)
    const signUp = new SignUpPage(page)

    await page.goto('/')
    await main.signInBtn.click()
    await signUp.actions.fillLogin(`${process.env.USERNAME}`)
    await signUp.actions.fillPassword(`${process.env.PASSWORD}`)
    await signUp.signInBtn.click()
    await expect(page).toHaveURL(`${process.env.PLAYWRIGHT_BASE_URL}`)
})

for (const record of wrong_auth) {
    test(`QC-2. Unsuccessful sign up ${record.number}`, async ({page}) => {
        const main = new MainPage(page)
        const signUp = new SignUpPage(page)

        await page.goto('/')
        await main.signInBtn.click()
        if (record.login === 'correct_login') {
            await signUp.actions.fillLogin(`${process.env.USERNAME}`)
        }
        else {
            await signUp.actions.fillLogin(record.login)
        }
        if (record.password === 'correct_password') {
            await signUp.actions.fillPassword(`${process.env.PASSWORD}`)
        }
        else {
            await signUp.actions.fillPassword(record.password)
        }
        await signUp.signInBtn.click()
        await expect(signUp.authorizationError).toBeVisible()
    })
}
