type changeThemeIdAT = {
    type: 'SET_THEME_ID',
    id: number
}
type initialStateType = {
    id: number
}
const initState = {
    id: 1
}

export const themeReducer = (state: initialStateType = initState, action: changeThemeIdAT): initialStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, id: action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdAT => ({ type: 'SET_THEME_ID', id }) // fix any
