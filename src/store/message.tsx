import create from "zustand"

const useStore = create((set: any, get: any) => ({
    GENERAL_CHAT_ID: "000111",
    selectedUser: {}, // default id for general chat ex: 000111
    setSelectedUser: (data) => set({ selectedUser: data }),

    selectedRoom: {}, // default id for general chat ex: 000111
    setSelectedRoom: (data) => set({ selectedRoom: data }),

    messages: [],
    addMessage: (message) => set(state => {
        if(state.selectedRoom?._id === message.roomId) {
            return { messages: [...state.messages, message] }
        }

        return { messages: state.messages }
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