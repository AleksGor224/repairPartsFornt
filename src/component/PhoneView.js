import React, {Component} from 'react';
import "./css/PhoneView.css"

class PhoneView extends Component {
    render() {
        return (
            <div className={"View"}>
                <h2>{this.props.brand}</h2>
                <h1>{this.props.model}</h1>
                <p>{this.props.id}</p>
                <p>{this.props.addedTime}</p>
                <p>{this.props.lastUpdateTime}</p>
                <button onClick={this.props.delete}>X</button>
            </div>
        );
    }
}

export default PhoneView;