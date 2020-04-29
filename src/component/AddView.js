import React from "react";

const AddView = (props) =>{

    return(
        <>
            <input type="text" placeholder={"Type brand"} onChange={props.handlerBrand}/>
            <input type="text" placeholder={"Type model"} onChange={props.handlerModel}/>
            <button type="submit" onClick={props.sendData}>Add</button>
        </>
    )
}

export default AddView;