import { get, postJSON } from './request'

export const getRooms = () => get(`rooms`)
export const getUserRooms = (id) => get(`rooms/users/${id}`)
export const getRoomDetail = (roomId) => get(`rooms/${roomId}`)
// export const getRoomMessages = (id) => get(`rooms/${id}/messages`)