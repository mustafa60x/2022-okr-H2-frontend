import create from "zustand"

const useStore = create((set: any, get: any) => ({
    selectedUserId: '', // default id for general chat ex: 000111
    setSelectedUserId: (userId) => set({ selectedUserId: userId }),
    messages: [],
    addMessage: (message) => set(state => ({ messages: [...state.messages, message] })),
    setAllMessages: (messages) => set({ messages: messages }),
    destroyAllMessages: () => set({ messages: [] }),
}))

export default useStore;