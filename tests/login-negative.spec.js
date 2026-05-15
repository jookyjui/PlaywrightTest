import { test, expect } from '../utils/fixtures/loginFixtures';
import testdata from '../data/testdata.json' with {type: 'json'};
import selector from '../pageSelectors.json' with {type: 'json' };
import endpoint from '../config/endpoints.json' with {type: 'json'};
import host from '../config/hostUrl.json' with {type: 'json'};
import { LoginPage } from '../utils/pages/LoginPage';

test.describe('[Negative Flow]: Login functionality', () => {
    test('TC006: Login with Invalid Username and Valid Password', { tag: ['@negative', '@login'] }, async ({ page, loginPage }) => {
        await loginPage.testLogin(
            testdata.invalidUsername.username,
            testdata.invalidUsername.password
        );
        const invUserMsg = await page.textContent(selector.login.invalidMsg);
        await expect(invUserMsg).toContain('Your username is invalid!');
    })

    test('TC007: Login with Valid Username and Invalid Password', { tag: ['@negative', '@login'] }, async ({ page, loginPage }) => {
        await loginPage.testLogin(
            testdata.invalidPassword.username,
            testdata.invalidPassword.password
        );
        const invMsg = await page.textContent(selector.login.invalidMsg)
        await expect(invMsg).toContain('Your password is invalid!');
    })

})