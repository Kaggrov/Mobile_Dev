import {ID, Account, Client} from 'appwrite';
import Config from 'react-native-config';

import Snackbar from 'react-native-snackbar';

const appwriteClient = new Client();

const APPWRITE_ENDPOINT: string = Config.APPWRITE_ENDPOINT!;

const APPWRITE_PROJECT_ID: string = Config.APPWRITE_PROJECT_ID!;

type CreateUserAccount = {
  email: string;
  password: string;
  name: string;
};

type LoginUserAccount = {
  email: string;
  password: string;
};

class AppwriteService {
  acccount;

  constructor() {
    appwriteClient
      .setEndpoint(APPWRITE_ENDPOINT)
      .setProject(APPWRITE_PROJECT_ID);

    this.acccount = new Account(appwriteClient);
  }

  async createAccount({email, password, name}: CreateUserAccount) {
    try {
      const userAccount = await this.acccount.create(
        ID.unique(),
        email,
        password,
        name,
      );

      if (userAccount) {
        return this.login({email, password});
      } else {
        return userAccount;
      }
    } catch (error) {
      Snackbar.show({
        text: String(error),
        duration: Snackbar.LENGTH_LONG,
      });
      console.log('Appwrite Service :: createAccount()' + error);
    }
  }

  async login({email,password}:LoginUserAccount){

    try{

       return await this.acccount.createEmailPasswordSession(email,password);

    }catch(error){
        Snackbar.show({
            text: String(error),
            duration: Snackbar.LENGTH_LONG,
          });
        console.log('Appwrite Service :: login()' + error);
    }
  }

  async getCurrentUser(){

    try{
        return await this.acccount.get()
    }
    catch(error){
        console.log('Appwrite Service :: getUser()' + error);
    }
  }

  async logout(){
    try{
        await this.acccount.deleteSession('current');
    }
    catch(error){
        console.log('Appwrite Service :: logout()' + error);
    }
  }

}

export default AppwriteService;
