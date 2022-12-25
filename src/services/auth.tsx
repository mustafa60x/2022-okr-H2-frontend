import { postJSON } from './request'

export const login = (data) => postJSON(`auth/login`, data)