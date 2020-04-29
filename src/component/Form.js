import * as React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "",
            model: ""
        };
        this.handleChangeModel = this.handleChangeModel.bind(this);
        this.handleChangeBrand = this.handleChangeBrand.bind(this);
    }

    handleChangeModel(event) {
        this.setState({model: event.target.value});
    }
    handleChangeBrand(event) {
        this.setState({brand: event.target.value});
    }

    // handleSubmit(event) {
    //     alert('A phone was submitted: ' + this.state.brand + " " + this.state.model);
    //     event.preventDefault();
    // }

    render() {
        return (
            <form onSubmit={()=> this.props.sendData(this.state.brand,this.state.model)}>
                <label>
                    New Phone:
                    <input type="text" value={this.state.brand} onChange={this.handleChangeBrand} />
                    <input type="text" value={this.state.model} onChange={this.handleChangeModel} />
                </label>
                <input type="submit" value="Add"/>
            </form>
        );
    }
}

export default Form;