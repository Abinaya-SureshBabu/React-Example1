import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Title2 from './title2';

class Edit extends React.Component {
    requirevalidate(e) {
        e.preventDefault();
        e.target.value === "" ? e.target.style.border = "1px solid red" : e.target.removeAttribute('style');
    }
    handleEdit = (e) => {
        e.preventDefault();
        const newFirstname = this.getFirstname.value;
        const newLastname = this.getLastname.value;
        const newEmail = this.getEmail.value;
        const newcontact = this.getcontact.value;
        const newbalance = this.getbalance.value;

        const data = {
            newFirstname,
            newLastname,
            newEmail,
            newcontact,
            newbalance
        }
        
        this.props.dispatch({ type: 'UPDATE', id: this.props.match.params.id, data: data });
        this.getFirstname.value = '';
        this.getLastname.value = '';
        this.getEmail.value = '';
        this.getcontact.value = '';
        this.getbalance.value = '';
        this.props.history.push("/details/" + this.props.match.params.id)
    }
    getDetails() {
        let a = this.props.match.params.id;
        const client = this.props.clientdata.find((data, index) => {
            return index == a
        })
        return (
            <div>
                <div className="card-body">
                    <form onSubmit={this.handleEdit}>
                        <div className="form-group">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" className="form-control" onChange={this.requirevalidate} ref={(input) => this.getFirstname = input} defaultValue={client.Firstname} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" className="form-control" onChange={this.requirevalidate} ref={(input) => this.getLastname = input} defaultValue={client.Lastname} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" onChange={this.requirevalidate} ref={(input) => this.getEmail = input} defaultValue={client.Email} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" className="form-control" onChange={this.requirevalidate} ref={(input) => this.getcontact = input} defaultValue={client.contact} />
                        </div>
                        {
                            this.props.settingsreducer.DisableBalanceOnEdit ?
                                <div>
                                    <label for="Balance">Balance</label><input type="number" className="form-control" name="balance" ref={(input) => this.getbalance = input} onChange={this.requirevalidate} defaultValue={client.balance} disabled />
                                </div> :
                                <div>
                                    <label for="Balance">Balance</label><input type="number" className="form-control" name="balance" ref={(input) => this.getbalance = input} onChange={this.requirevalidate} defaultValue={client.balance} />
                                </div>
                        }
                        <button className="btn btn-primary mt-3" style={{ width: "100%" }}>Submit</button>
                    </form>
                </div>

            </div>
        )
    }
    render() {
        return (
            <div>
                <Title2 a="Dashboard" b="Settings" c="Logout"></Title2>
                <div className="container">
                    <div className="row mt-5">
                        <Link to="/dashboard"><i className="material-icons text-primary" style={{ float: "left" }}>
                            keyboard_backspace</i>Back To Dashboard</Link>
                    </div>
                    <div className="card mt-4">
                        <div className="card-header ">
                            <h4>Edit client</h4>
                        </div>
                        {this.getDetails()}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        clientdata: state.clientdetails,
        settingsreducer: state.setting
    };
}
export default connect(mapStateToProps)(Edit);
