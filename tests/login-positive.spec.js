import { test, expect } from '../utils/fixtures/loginFixtures';
import testdata from '../data/testdata.json' with {type: 'json'};
import selector from '../pageSelectors.json' with {type: 'json' };
import endpoint from '../config/endpoints.json' with {type: 'json'};
import host from '../config/hostUrl.json' with {type: 'json'};

test.describe('[Happy Flow]: Login functionality', () => {
    test.beforeEach(async ({ page,loginPage }) => {
        await loginPage.testLogin(
            testdata.validUser.username,
            testdata.validUser.password
        );
    })

    test('TC001: Verify login using valid username and valid password and logout', { tag: ['@positive', '@login'] }, async ({ page, loginPage }) => {

        const description = await page.textContent(selector.login.descriptionMsg);
        await expect(description).toContain('Congratulations student. You successfully logged in!');
        await page.locator(selector.login.logoutBtn).click();

    });

    test('TC002: Verify login success message', { tag: ['@positive', '@login'] }, async ({ page, loginPage }) => {

        const successMessage = await page.textContent(selector.login.successMsg);
        await expect(successMessage).toContain('Logged In Successfully');

    })

    test('TC003: Verify login success URL', { tag: ['@positive', '@login'] }, async ({ page, loginPage }) => {

        await expect(page).toHaveURL(host.protocol+'://'+host.baseURL+endpoint.login.loggedIn);
        
        
    })
})