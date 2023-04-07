const initState: stateType = {
    isLoading: false
}
export type stateType = {
    isLoading: boolean
}
export type LoadingActionType = ReturnType<typeof LoadingAC>
export const loadingReducer = (state = initState, action: LoadingActionType): stateType => { // fix any
    switch (action.type) {
        case "CHANGE-LOADING":
            return {...state, isLoading: action.payload.isLoading}
        default:
            return state;
    }
}

export const LoadingAC = (isLoading: boolean) => {
   return {
       type: 'CHANGE-LOADING',
       payload: {
           isLoading
       }
   }as const
}