import * as BackEnd from "../../../logic/BackEnd";
import Phone from "../../../model/Phone";
import * as types from "./actionTypes"

export const addPhone = (brand,model) =>{
    return async (dispatch) =>{
        await BackEnd.addPhone(brand,model).then((e) =>{
            new Phone(
                e.brand,
                e.model,
                e.id,
                e.addedTime,
                e.lastUpdateTime)
        }).then((phone)=>{
            dispatch({
                type: types.ADD_PHONE,
                newPhone: phone
            })
        })
    }
}

export const getAllPhones = () => {
    return async (dispatch) => {
        let phones = [];
        await BackEnd.getAllPhones().then((e) => {
            let keys = Object.keys(e);
            keys.forEach(function (key) {
                phones.push(new Phone(
                    e[key].brand,
                    e[key].model,
                    e[key].id,
                    e[key].addedTime,
                    e[key].lastUpdateTime));
            })
        }).then(() => {
            dispatch(
                {
                    type: types.GET_ALL_PHONES,
                    phones: phones
                })
        })
    }
};

export const deleteById = (id) => {
    return async (dispatch) => {
        await BackEnd.deleteById(id).then((r) => {
            return new Phone(
                r.brand,
                r.model,
                r.id,
                r.addedTime,
                r.lastUpdateTime)
        }).then((r) => {
            dispatch(
                {
                    type: types.DELETE_BY_ID,
                    wasDeleted: r
                }
            )
        })
    }
}

export const returnDeleted = (brand, model) => {
    return async (dispatch) => {
        await BackEnd.addPhone(brand, model).then((e)=> {
           return new Phone(
                e.brand,
                e.model,
                e.id,
                e.addedTime,
                e.lastUpdateTime)
        }).then((e)=>{
            dispatch({
                type: types.ADD_REMOVED_PHONE,
                newPhone: e
            })
        })
    }
}


