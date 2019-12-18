import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class Details extends React.Component {
    state = {
        balance: '0.00',
        isvalid: false
    }
    display() {
        let value = this.state.isvalid
        this.setState({ isvalid: !value })
    }
    change = () => {
        let textbox = document.getElementById("value").value;
        this.setState({ balance: textbox });
        this.setState({ isvalid: false })
    }
    getDetails() {
        let a = this.props.match.params.id
        const client = this.props.clientdetail.find((data, index) => {
            return index == a;
        })
        return (
            <div>
                <div className="container-fluid">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-md-8">
                            <Link to="/dashboard"><i className="material-icons text-primary" style={{ float: "left" }}>
                                keyboard_backspace</i>Back To Dashboard</Link>
                        </div>
                        <div className="col-md-4">
                            <Link to="/dashboard">
                                <button className="btn btn-danger" style={{ float: "right" }} onClick={() => this.props.dispatch({ type: 'DELETE_CLIENT', id: this.props.match.params.id })}>Delete
                                </button>
                            </Link>
                            <Link to={"/edit/" + a}>
                                <button className="btn btn-dark"  style={{ float: "right" }} onClick={() => this.props.dispatch({ type: 'EDIT_CLIENT', id: this.props.match.params.id })}>Edit
                                </button>
                            </Link>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3>{client.Firstname + " " + client.Lastname}</h3>
                                </div>
                                <div className="card-body">
                                    <div className="row justify-content-between">
                                        <div>
                                            <h2 style={{ display: "inline-block", marginLeft: "20px" }}>Client ID :</h2><h3 style={{ color: "grey", display: "inline-block" }}>{client.reg}</h3>
                                        </div>
                                        <div>
                                            <h5 style={{ display: "inline-block" }}>Balance :</h5><span style={{ color: "green", fontSize: "22px" }}>${this.state.isvalid ? this.state.balance : this.state.balance}</span>
                                            <i className="material-icons" style={{ color: "blue" }} onClick={() => this.display()}>create</i>
                                        </div>
                                    </div>
                                    <div className="row justify-content-end" id="box">
                                        {
                                            this.state.isvalid ? <div>
                                                <input type='text' placeholder='Add new balance' id="value" />
                                                <button onClick={() => this.change()}>Update</button>
                                            </div> : ''
                                        }
                                    </div>
                                    <hr></hr>
                                    <div className="list-group">
                                        <div className="list-group-item">
                                            <h4>Contact Email: {client.Email}</h4>
                                        </div>
                                        <div className="list-group-item">
                                            <h4>Contact Phone: {client.contact}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </div>
        )
    }
    render() {
        return (
            <div>
                {this.getDetails()}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        clientdetail: state.clientdetails
    };

}
export default connect(mapStateToProps)(Details);
