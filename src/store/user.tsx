import create from "zustand"

const useStore = create((set: any, get: any) => ({
    users: [],
    addUser: (user) => set(state => ({ users: [...state.users, user] })),
    setUsers: (users) => set({ users: users }),
    destroyAllUsers: () => set(state => ({ counter: state.counter + 1 })),

}))

export default useStore;