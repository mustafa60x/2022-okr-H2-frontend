function reducer(state: any, action: any) {

    switch (action.type) {
        case 'TOGGLE_THEME':
            const theme = state.theme === 'light' ? 'dark' : 'light'

            localStorage.setItem("theme", theme)

            return {
                ...state,
                theme
            }
    
        default:
            break;
    }

}

export default reducer