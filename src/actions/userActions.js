export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function login() {
    return {
        type: LOGIN,
        payload: {
            name: 'Администратор'
        }
    };
}

export function logout() {
    return {
        type: LOGOUT,
        payload: {
            name: 'Гость'
        }
    };
}