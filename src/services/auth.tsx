import { postJSON } from './request'

export const login = (data) => postJSON(`auth/login`, data)
export const signup = (data) => postJSON(`auth/signup`, data)