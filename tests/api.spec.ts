import { AddUserResponse } from '../data/userData';
import { GetAddContactResponse } from '../data/contactData';
import { test, expect } from './fixtures/apiFixtures';

test.describe('users tests', async () => {
  
    test('Login', async ({ usersApi, userPayload }) => {
      const resp = await usersApi.login(userPayload)
      expect(resp.token).toBeTruthy();
      expect(typeof resp.token).toBe('string');
    })

    test('Create a contact', async ({ contactApi, contactPayload }) => {
      let contactId: string
      
      //create contact
      const createContactBody: GetAddContactResponse = await contactApi.addContact(contactPayload);
      contactId = createContactBody._id;

      //get contact
      const getContactRespBody: GetAddContactResponse[] = await contactApi.getContact();
      const isId = getContactRespBody.find(c => c._id == contactId);
      expect(isId).toBeDefined()

    });

    test('Delete a contact', async ({ contactApi, contactPayload }) => {
      let contactId: string
      
      // add contact
      const createContactBody: GetAddContactResponse = await contactApi.addContact(contactPayload);
      contactId = createContactBody._id;

      // delete contact
      await contactApi.deleteContact(contactId);

      //get contact
      const getContactRespBody: GetAddContactResponse[] = await contactApi.getContact();
      const isId = getContactRespBody.find(c => c._id == contactId);
      expect(isId).toBeUndefined()

    });

    

})

