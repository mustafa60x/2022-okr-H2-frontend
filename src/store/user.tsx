import create from "zustand"

const useStore = create((set: any, get: any) => ({
    user: '',
    setUser: (user) => set({ user: user }),
    removeUser: () => set({ user: '' }),
    users: [],
    addUser: (user) => set(state => ({ users: [...state.users, user] })),
    setUsers: (users) => set({ users: users }),
    destroyAllUsers: () => set({ users: [] }),
}))

export default useStore;