import {Component} from "react/cjs/react.production.min";
import {deleteById, getAllPhones} from "../store/phones/actions/actions"
import React from "react";
import PhoneView from "../component/PhoneView"
import {connect} from 'react-redux';
import "./css/PhonesContainer.css"
import {selectPhones, selectCurrent} from "../store/phones/reducer/phoneReducer";

class PhonesContainer extends Component {

    componentDidMount() {
        this.props.getAllData()
    }

    render() {
        return (
            <div className="phoneViews">
                {this.props.phones.length > 0 ? (
                    this.props.phones.map((e)=>
                        <PhoneView
                            id={e.id}
                            brand={e.brand}
                            model={e.model}
                            addedTime={e.addedTime}
                            lastUpdate={e.lastUpdateTime}
                            delete={() => this.props.deleteDispatcher(e.id)}
                        />
                    )) : (<h2>Phones List is Empty</h2>)}

            </div>
        );
    }
}

const mapStateToProps = state =>({
        phones:selectPhones(state),
        currentPhone:selectCurrent(state)
})

const mapDispatchToProps = dispatch => ({
    deleteDispatcher: id => dispatch(deleteById(id)),
    getAllData: () => dispatch(getAllPhones())
})

export default connect(mapStateToProps,mapDispatchToProps)(PhonesContainer);
