import { AddUserResponse } from "../data/userData"
import { UserPayload } from "../data/addUserPayload"
import { ClientApi } from "./client.api"

export class UsersApi extends ClientApi{

    async addUser(payload: UserPayload): Promise<AddUserResponse> {
        return this.postWithoutAuth<AddUserResponse>('/users', payload);
    } 

    async login(payload: Pick<UserPayload, 'email' | 'password'>): Promise<AddUserResponse> {
        return this.postWithoutAuth<AddUserResponse>('/users/login', payload)
    } 

    async deleteUser() {
        return await this.delete('/users/me')
    }

}
