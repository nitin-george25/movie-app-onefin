export const initialState = {
    token: '',
};

const authReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'UPDATE_TOKEN':
            console.log('UPDATE_TOKEN', payload);
            return {
                ...state,
                token: payload.token,
            };
        default:
            throw new Error(`Action type ${type} not found`);
    }
};

export default authReducer;