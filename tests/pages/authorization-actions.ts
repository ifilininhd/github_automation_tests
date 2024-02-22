import { SignUpPage } from './sign-up-page'

export class AuthorizationActions {
    constructor(public page: SignUpPage) {}

    async fillLogin(login: string) {
        await this.page.loginField.fill(login)
    }

    async fillPassword(password: string) {
        await this.page.passwordField.fill(password)
    }
}
