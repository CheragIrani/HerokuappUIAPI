import { GetAddContactResponse } from "../data/contactData";
import { ContactPayload } from "../data/contactPayload";
import { ClientApi } from "./client.api";

export class ContactApi extends ClientApi{
    
    async addContact(payload: ContactPayload): Promise<GetAddContactResponse>{
        return this.post('/contacts', payload)

    }

    async getContact(): Promise<GetAddContactResponse[]>{
        return await this.getArray<GetAddContactResponse>('/contacts');
        
    }

    async deleteContact(contactId: string){
        let url = `/contacts/${contactId}`
        return await this.delete(url);
        
    }

}
