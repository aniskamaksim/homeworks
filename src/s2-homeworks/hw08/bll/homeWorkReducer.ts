import {UserType} from '../HW8'
//TODO: доделать SORT-BY-AGE логику, добавить кнопку и отрисовать
type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }
    // | { type: 'SORT-BY-AGE'; payload: 'up' | 'down'}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let copyPeople = state.map(e => ({...e}));
            if (action.payload === 'up') {
                return copyPeople.sort((a, b) => {return a.name < b.name ? -1 : a.name > b.name ? 1 : 0})
            } else if (action.payload === 'down') {
                return copyPeople.sort((a, b) => {return a.name > b.name ? -1 : a.name < b.name ? 1 : 0});
            } else {
                return state;
            }
        }// need to fix
        case 'check': {
            return state.filter(e=>e.age >= 18)
        }
        default:
            return state
    }
}
