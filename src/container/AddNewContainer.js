import React, {Component} from "react";
import {addPhone} from "../store/phones/actions/actions";
import {connect} from "react-redux";
import Form from "../component/Form";

class AddNewContainer extends Component{

    render() {
        return (
            <div>
                <Form sendData={this.props.sendData}/>
            </div>
        );
    }
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = dispatch =>({
    sendData: (brand,model) => dispatch(addPhone(brand,model)),
})

export default connect(mapStateToProps,mapDispatchToProps)(AddNewContainer);