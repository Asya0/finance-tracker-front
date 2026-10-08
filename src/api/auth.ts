import { request } from './request';

export const auth = (email: string, password: string) => {
   request.post('auth/login', { email, password });
};
// паттерн ФАБРИКА
export const registration = (email: string, password: string) => {
   request.post('auth/registration', { email, password });
};
