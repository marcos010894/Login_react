import { Api } from "../axiosConfig"

interface IAuth {
    token: string,
    id: string,
    usename: string,
    email: string,
    firstName: string,
    lastName: string,
    gender: string,
    image: string,
}

const auth = async (user: string, password: string): Promise<IAuth | Error> => {
    try {
        const { data } = await Api.post('/auth/login', {
            "username": user,
            "password": password
        })

        if (data) {
            return data
        }

        return new Error('Error no login.')
    } catch (error) {
        return new Error((error as { message: string }).message) || 'Erro no login..'
    }


};


export const AuthService = {
    auth,
}