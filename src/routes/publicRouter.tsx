import { Menu } from "../interfaces";
import { Login, Register, ResetPassword } from "../pages";
 

export const publicRoutes:Menu[] = [  
    {
        path: '/app/login',
        Component: Login,
    },
    {
        path: '/app/register',
        Component: Register,
    },
    {
        path: '/app/reset-password',
        Component: ResetPassword,
    },
]