import { Page } from '@playwright/test'
import { AuthorizationActions } from './authorization-actions'

export class SignUpPage {
    readonly loginField = this.page.getByLabel('Username or email address')
    readonly passwordField = this.page.getByLabel('Password')
    readonly signInBtn = this.page.getByRole('button', { name: 'Sign in', exact: true })
    readonly authorizationError = this.page.getByText('Incorrect username or password.')

    readonly actions = new AuthorizationActions(this)

    constructor(readonly page: Page) {}
}
