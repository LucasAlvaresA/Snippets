# Requisition example (Axios)

- We have an `api.ts` file that includes our baseAPI:

```ts
import axios from "axios";

const api = axios.create({
  baseURL: "https://apiexample.com.br/",
});

export default api;
```

- Now we create a file for each type of functionality:

```ts
import api from "./api";

class LoginService {
  /**
   * @description Login function
   * @returns {Promise<string | false>} An string token when requisition is true or false in error
   */
  async loginFunction(email: string, password: string) {
    try {
      const { data } = await api.post(`auth`, {
        email,
        password,
      });
      return data;
    } catch (error: any) {
      return {
        error: true,
        message: error.response.data.error.messages[0],
      };
    }
  }

  /**
   * @description Send confirmation code function
   * @returns {Promise<string | false>} An token when requisition is true or false in error
   */
  async sendCode(email: string) {
    try {
      const { data } = await api.post(`send/code`, {
        email,
      });
      return data;
    } catch (error) {
      return false;
    }
  }

  /**
   * @description Check confirmation code function
   * @returns {Promise<string | false>} An temporary token when requisition is true or false in error
   */
  async checkCode(code: string, id: string) {
    try {
      const { data } = await api.post(`confirm/code/${id}`, {
        code,
      });
      return data;
    } catch (error) {
      return false;
    }
  }

  /**
   * @description Change password function
   * @returns {Promise<string | false>} An temporary token when requisition is true or false in error
   */
  async changePassword(
    newPassword: string,
    confirmPassword: string,
    token: string
  ) {
    try {
      const { data } = await api.put(
        `update/password`,
        {
          newPassword,
          confirmPassword,
        },
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return data;
    } catch (error) {
      return false;
    }
  }
}

export default new LoginService();
```