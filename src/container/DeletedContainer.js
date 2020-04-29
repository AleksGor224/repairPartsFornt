import React, {Component} from "react";
import {connect} from "react-redux";
import {selectDeleted} from "../store/phones/reducer/phoneReducer";
import PhoneView from "../component/PhoneView";
import {returnDeleted} from "../store/phones/actions/actions";

class DeletedContainer extends Component {

    componentDidMount() {
        if(this.props.wasDeleted !== undefined) {
            console.log("curr deleted obj is: " + "id: " + this.props.wasDeleted.id + "model: " + this.props.wasDeleted.model)
        }else{
            console.log("curr deleted obj is: Empty")
        }
    }

    render() {
        return (
            <>
                {this.props.wasDeleted !== undefined && this.props.wasDeleted.id !== undefined ?
                    (<PhoneView id={this.props.wasDeleted.id}
                                brand={this.props.wasDeleted.brand}
                                model={this.props.wasDeleted.model}
                                addedTime={this.props.wasDeleted.addedTime}
                                lastUpdate={this.props.wasDeleted.lastUpdateTime}
                                delete={() => this.props.returnToBack(this.props.wasDeleted.brand,
                                    this.props.wasDeleted.model)}
                    />) : (<h2>Deleted list is empty</h2>)}
            </>
        )
    }
}

const mapStateToProps = state => ({
    wasDeleted: selectDeleted(state)
})

const mapDispatchToProps = dispatch => ({
    //TODO
    returnToBack: (brand,model) => dispatch(returnDeleted(brand,model))
})

export default connect(mapStateToProps,mapDispatchToProps)(DeletedContainer);