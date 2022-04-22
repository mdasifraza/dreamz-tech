export const saveFormInfo = (data) => async (dispatch, getState) => {
    dispatch({
        type: "SUBMIT_FORM_REQUEST",
        payload: {
            name: data.name,
            stateName: data.stateName,
            adminType: data.adminType,
            propertyLand: data.propertyLand,
            location: data.location,
            taxesType: data.taxesType,
            tax: data.tax,
        },
    });
    sessionStorage.setItem("formInfo", JSON.stringify(getState().formInfo));
};