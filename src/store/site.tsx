import create from "zustand"

const useStore = create((set: any, get: any) => ({
    counter: 0,
    changeCounter: (payload: number) => set({ counter: payload }),
    increaseCounter: () => set(state => ({ counter: state.counter + 1 })),
    errors: [],
    addError: (error) => set(state => ({ errors: [...state.errors, error] })),
    removeError: (error) => set(state => ({ errors: [...state.errors.filter((item: any) => item.id !== error.id)] })),
    destroyAllErrors: () => set(state => ({ errors: [] })),

}))

export default useStore;