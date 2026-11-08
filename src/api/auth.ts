import { request } from './request';

export const login = (email: string, password: string) => {
   request.post('auth/login', { email, password });
};
export const registration = (email: string, password: string) => {
   request.post('auth/registration', { email, password });
};
