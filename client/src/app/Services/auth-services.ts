import { Injectable, Query } from '@angular/core';
import { host } from '../utils/apis';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AuthServices {

  async registerUser(payload: any) {

    const mutation = `
      mutation {
        createUser(input: {
          name: "${payload.name}",
          userName: "${payload.userName}",
          email: "${payload.email}",
          password: "${payload.password}",
          phoneNumber: "${payload.phoneNumber}",
          role: ${payload.role}
        }) {
          id
          name
          userName
          email
          phoneNumber
          role
          isDeleted
          createdAt
          updatedAt
          deletedAt
        }
      }
    `;

    try {
      const response = await axios.post(host, { query: mutation });
      console.log(response);
    } catch (err) {
      console.log(err)
    }

  }

  async loginUser(payload: any) {

    console.log("the payload in the auth is :", payload)

    const loginMutation = `
    mutation {
      loginUser(
        loginInput: { email: "${payload.email}", password: "${payload.password}" }
      ) {
    user {
          id
          name
          email
        }
        token
        message
      }
    }`

    try {


      const response = await axios.post(host, { query: loginMutation });
      console.log(response.data.data.loginUser.user)
      console.log(response.data.data.loginUser.message)
      console.log(response.data.data.loginUser.token)
    } catch (err) {
      console.log(err)
    }

  }

}
