import create from "zustand"

const useStore = create((set: any, get: any) => ({
    counter: 0,
    increaseCounter: () => set(state => ({ counter: state.counter + 1 })),
    decreaseCounter: () => set(state => {
        const newCount = state.counter - 1

        return { counter: newCount < 0 ? 0 : newCount }
    }),
    resetCounter: () => set(state => ({ counter: 0 })),
}))

export default useStore;