import { request } from './request';

export const login = (email: string, password: string) => {
   return request.post('auth/login', { email, password });
};
export const logout = () => {
   return request.post('session/logout', {});
};
export const registration = (email: string, password: string) => {
   return request.post('auth/registration', { email, password });
};
