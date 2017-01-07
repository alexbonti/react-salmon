const SET_CURRENT = 'SET_CURRENT'

export const setCurrent = (payload) => {
    return {
        type: SET_CURRENT,
        payload: payload
    }
}
