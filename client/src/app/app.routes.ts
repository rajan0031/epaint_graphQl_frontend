import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './Components/home/home';
import { Signup } from './Auth/signup/signup';
import { Login } from './Auth/login/login';
import { SignupLogin } from './Auth/signup-login/signup-login';
export const routes: Routes = [

    {
        path: '',
        component: Layout,
        children: [
            {
                path: '',
                component: Home
            },
            {
                path: "auth",
                component: SignupLogin
            }

        ]
    }

];
