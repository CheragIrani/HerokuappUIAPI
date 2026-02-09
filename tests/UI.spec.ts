import { UsersApi } from '../api/users.api';
import { test, expect } from './fixtures/apiFixtures';

test('Login', async ({ page, userPayload, loginPage, registrationPage, contactPage }) => {
  await page.goto('/');
  await loginPage.clickSignup()
  await registrationPage.registerUser(userPayload)
  await registrationPage.clickSubmit();
  await contactPage.clickLogout();
  await loginPage.login(userPayload);
  expect(await contactPage.isLoaded()).toBeTruthy()
  expect(new URL(page.url()).pathname).toBe('/contactList');

  
});

test.afterEach('delete user', async ({ page, request }) => {
  const cookies = await page.context().cookies();
  const token = cookies.find(c => c.name === 'token')?.value;
  console.log('TOKEN:', token);

  const userApi = new UsersApi(request, token!);
  await userApi.deleteUser();
  await page.close()
});
