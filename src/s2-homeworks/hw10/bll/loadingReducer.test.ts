import {LoadingAC, loadingReducer} from "./loadingReducer";

test("loading should correctly change", ()=>{
    const startState = {
        isLoading: false
    }
    const endState = loadingReducer(startState, LoadingAC(true))

    expect(endState.isLoading).toBe(true)

})