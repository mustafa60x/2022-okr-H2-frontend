import create from "zustand"

const useStore = create((set: any, get: any) => ({
    selectedUser: {}, // default id for general chat ex: 000111
    setSelectedUser: (userData) => set({ selectedUser: userData }),
    messages: [],
    addMessage: (message) => set(state => ({ messages: [...state.messages, message] })),
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
    destroyAllUsers: () => set({ users: [] }),
}))

export default useStore;