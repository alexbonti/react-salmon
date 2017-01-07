const FAKE_ACTION = 'FAKE_ACTION'

export const fakeAction = (payload) => {
    return {
        type: INC_COUNTER,
        payload: payload
    }
}
