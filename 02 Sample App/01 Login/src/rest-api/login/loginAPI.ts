import {LoginCredential} from '../../models/loginCredential';
import {LoginResponse} from '../../models/loginResponse';
import {loginMockResponses} from './loginMockData';

class LoginAPI {
  public login(loginCredential: LoginCredential): Promise<LoginResponse> {
    let loginResponse = loginMockResponses.find((response) => {
      return response.userProfile.login === loginCredential.login;
    });

    if (!loginResponse || loginCredential.password !== 'test') {
      loginResponse = new LoginResponse();
    }

    return Promise.resolve(loginResponse);
  }
}
