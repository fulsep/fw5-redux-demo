const initialState = {
    num: 0
}

const counter = (state=initialState, action)=>{
    switch(action.type){
        case 'COUNTER_INCREMENT': {
            state.num = state.num + 1
            return {...state}
        }
        case 'COUNTER_DECREMENT': {
            state.num = state.num - 1
            return {...state}
        }
        default: {
            return {...state}
        }
    }
}

export default counter