import { get, postJSON } from './request'

export const getRooms = () => get(`rooms`)
export const getUserRooms = (id) => get(`rooms/user/${id}`)
export const getRoomDetail = (id) => get(`rooms/${id}`)