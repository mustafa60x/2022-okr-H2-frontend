import { get } from './request'

export const getUsers = () => get('users')
export const getUserDetail = (id) => get(`users/${id}`)