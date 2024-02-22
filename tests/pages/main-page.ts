import { Page } from '@playwright/test'

export class MainPage {
    readonly signInBtn = this.page.getByRole('link', {name: 'Sign in'})

    constructor(readonly page: Page) {}
}
