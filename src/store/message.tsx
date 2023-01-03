import create from "zustand"
import useNotificationStore from "../store/notification";

const GENERAL_CHAT_ID = "000111"
const useStore = create((set: any, get: any) => ({
    GENERAL_CHAT_ID: GENERAL_CHAT_ID,
    selectedUser: {}, // default id for general chat ex: 000111
    setSelectedUser: (data) => set({ selectedUser: data }),

    selectedRoom: {}, // default id for general chat ex: 000111
    setSelectedRoom: (data) => set({ selectedRoom: data }),

    messages: [],
    addMessage: (message) => set(state => {

        // mapped
        const mappedRooms = state.rooms?.map(room => {
            return {
                ...room,
                // kullanıcı listesi ekranında last message alanını günceller
                messages: room?._id === message.roomId ? [message] : room.messages
            }
        })

        if(message.roomId === state.GENERAL_CHAT_ID && message.type === "message") {
            message["text"] = message.username + ": " + message.text
        }


        // update messages
        if(state.selectedRoom?._id === message.roomId) {
            return { messages: [...state.messages, message], rooms: mappedRooms }
        } else {
            // mesajın sahibi seçili user değilse notification oluştur
            if(message.roomId !== state.GENERAL_CHAT_ID && message.type === "message") {
                const currentCounter = useNotificationStore.getState().counter
                useNotificationStore.setState((state) => ({ counter: currentCounter + 1 }))
            }
        }

        return { messages: state.messages, rooms: mappedRooms }
    }),
    setAllMessages: (messages) => set({ messages: messages }),
    destroyAllMessages: () => set({ messages: [] }),

    users: [],
    addUser: (user) => set(state => {
        const foundedUser = state.users.find(item => item._id === user._id)
        if (!!foundedUser) {
            return state.users
        } else {
            return {
                users: [...state.users, user]
            }
        }
    }),
    setAllUsers: (users) => set({ users: users }),
    destroyAllUsers: () => set({ users: [] }),

    // room
    rooms: [],
    addRoom: (room) => set(state => {
        const founded = state.rooms.find(item => item._id === room._id)
        if (!!founded) {
            return state.rooms
        } else {
            return {
                rooms: [...state.rooms, room]
            }
        }
    }),
    setAllRooms: (rooms) => set({ rooms: rooms }),
    destroyAllRooms: () => set({ rooms: [] }),
}))

export default useStore;