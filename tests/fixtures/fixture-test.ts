import { test as base } from '@playwright/test'
import { getCurrentDate } from '../functions/current-date'

export const test = base.extend({
    page: async ({page, browserName}, use, testInfo) => {
        console.log(`Running ${testInfo.title}`)

        await use(page)

        if (testInfo.status !== testInfo.expectedStatus) {
            console.log(`Did not run as expected, ended up at ${page.url()}`)
        }

        if (testInfo.status !== 'passed') {
            await page.screenshot({
                path: `screenshots/${testInfo.title} ${getCurrentDate()} ${browserName}.png`,
                fullPage: true,
            })
        }
    },
})
