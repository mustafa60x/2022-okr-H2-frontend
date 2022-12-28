import { get, postJSON } from './request'

export const getUsers = () => get('users')
export const getUserDetail = (id) => get(`users/${id}`)
export const searchUsers = (data) => postJSON(`users/search`, data)