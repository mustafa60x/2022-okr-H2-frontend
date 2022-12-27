import create from "zustand"

const useStore = create((set: any, get: any) => ({
    counter: 0,
    changeCounter: (payload: number) => set({ counter: payload }),
    increaseCounter: () => set(state => ({ counter: state.counter + 1 })),

}))

export default useStore;