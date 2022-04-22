export const formReducer = (state = { formInfo: [] }, action) => {
    // console.log(state, "<--------");
    state = JSON.parse(sessionStorage.getItem("formInfo")) || state;
    switch (action.type) {
        case "SUBMIT_FORM_REQUEST":
            const info = action.payload;
            console.log(info)
            return {
                ...state,
                formInfo: [...state.formInfo, info],
            };

        default:
            return state;
    }
};