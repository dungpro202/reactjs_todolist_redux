

var initialState = {
    by: 'name',
    value: 1 // 1 : tang, -1 giam
}

var myReducer = (state = initialState, action) => {

    if (action.type === 'SORT') {
        // return lai 1 state ms
        var { by, value } = action.sort; // by = action.sort.by
        return {
            by, value
        }

    }
    return state;
}

export default myReducer;