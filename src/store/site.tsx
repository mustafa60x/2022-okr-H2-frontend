import create from "zustand"

const useStore = create((set: any, get: any) => ({
    counter: 0,
    changeCounter: (payload: number) => set({ counter: payload }),
    increaseCounter: () => set(state => ({ counter: state.counter + 1 })),
    errors: [],
    addError: (error) => set(state => ({ errors: [...state.errors, error] })),
    removeError: (error) => set(state => ({ errors: [...state.errors.filter((item: any) => item.id !== error.id)] })),
    destroyAllErrors: () => set(state => ({ errors: [] })),
    successes: [],
    addSuccess: (success) => set(state => ({ successes: [...state.successes, success] })),
    removeSuccess: (success) => set(state => ({ successes: [...state.successes.filter((item: any) => item.id !== success.id)] })),
    destroyAllSuccesses: () => set(state => ({ successes: [] })),
    isLoading: true,
    setLoading: (status) => set(state => ({ isLoading: status })),
}))

export default useStore;