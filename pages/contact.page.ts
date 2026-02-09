import { Locator, Page } from "@playwright/test";

export class ContactPage{
    readonly page: Page
    readonly logoutButton: Locator
    readonly contactHeading: Locator

    constructor(page:Page){
        this.page = page
        this.logoutButton = page.getByRole('button', { name: 'Logout' })
        this.contactHeading = page.getByRole('heading', { name: 'Contact List'}) 
    }

    async isLoaded(): Promise<boolean> {
        await this.page.waitForURL('https://thinking-tester-contact-list.herokuapp.com/contactList');
        return await this.contactHeading.isVisible({timeout: 5000})
    }

    async clickLogout(){
        await this.logoutButton.click()
    }
}