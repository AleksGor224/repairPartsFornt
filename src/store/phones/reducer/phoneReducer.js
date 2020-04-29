const initState = {
    phones:[],
    currentPhone : {},
    wasDeleted:{},
};

export default (prevState = initState, action)=> {
    switch (action.type) {
        case "ADD_PHONE":{
            let phones = prevState.phones
            phones.push(action.newPhone);
            return {
                phones: phones,
                wasDeleted: prevState.wasDeleted,
                addForm: prevState.addForm
            }
        }
        case "GET_ALL_PHONES":{
            console.log("called action in reducer: GET_ALL_PHONES")
            return{
            phones: action.phones,
            wasDeleted: prevState.wasDeleted,
            addForm: prevState.addForm
            };
        }
        case "DELETE_BY_ID":{
            console.log("called action in reducer: DELETE_BY_ID")
            return{
                wasDeleted: action.wasDeleted,
                phones: prevState.phones.filter((e) => e.id !== action.wasDeleted.id),
                addForm: prevState.addForm
            }
        }
        case "ADD_REMOVED_PHONE":{
            console.log("called action in reducer: ADD_REMOVED_PHONE")
            let phones = prevState.phones
            phones.push(action.newPhone);
            return {
                phones: phones,
                wasDeleted: prevState.wasDeleted,
                addForm: prevState.addForm
            }
        }
        default: return prevState;
    }

}

export const selectPhones = state => state.phones;
export const selectCurrent = state => state.currentPhone;
export const selectDeleted = state => state.wasDeleted;
