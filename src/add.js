import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Firstname: '',
            Lastname: '',
            Email: '',
            contact: '',
            reg: "12343",
            balance: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        event.target.value === "" ? event.target.style.border = "1px solid red" : event.target.removeAttribute('style');
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.addArticle(this.state);
        this.setState({ id: '', Firstname: '', Lastname: '', Email: '', balance: 0, contact: '' });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row mt-5">
                        <Link to="/dashboard"><i class="material-icons text-primary" style={{ float: "left" }}>keyboard_backspace</i>Back To Dashboard</Link>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0">AddClient</h3>
                        </div>
                        <div className="card-body">
                            <form className="form" id="formRegister" method="POST" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label for="firstname">FirstName</label>
                                    <input type="text" className="form-control" name="Firstname" placeholder="Enter Firstname" value={this.state.Firstname} onChange={this.handleChange} ></input>
                                </div>
                                <div className="form-group">
                                    <label for="lastname">LastName</label>
                                    <input type="text" className="form-control" name="Lastname" placeholder="Enter Lastname" value={this.state.Lastname} onChange={this.handleChange}></input>
                                </div>
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control" name="Email" placeholder="Enter Email" value={this.state.Email} onChange={this.handleChange}></input>
                                </div>
                                <div className="form-group">
                                    <label for="phone">Phone</label>
                                    <input type="text" className="form-control" name="contact" placeholder="Enter Phone" value={this.state.contact} onChange={this.handleChange}></input>
                                </div>
                                {
                                    this.props.settingsreducer.DisableBalanceOnAdd ?
                                     <div>
                                    <label for ="Balance">Balance</label><input type ="number" className="form-control" name="balance" placeholder="Enter the balance" value={this.state.balance} onChange={this.handleChange} disabled/>
                                </div> :
                                <div>
                                     <label for ="Balance">Balance</label><input type ="number" className="form-control" name="balance" placeholder="Enter the balance" value={this.state.balance} onChange={this.handleChange} />
                                </div>
                                }


                                <button type="submit" className="btn btn-primary " id="btnLogin" style={{ width: "100%" }} >Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {

    return {
        addArticle: (adddata) => dispatch({ type: "ADD_CLIENT", value: adddata })
    };
}
const mapStateToProps = (state) => {
    console.log(state.user)
    return {
        user: state.user,
        settingsreducer:state.setting
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Add);


