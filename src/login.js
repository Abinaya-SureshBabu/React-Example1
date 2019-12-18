import React from 'react';
import { connect } from 'react-redux'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Email: '',
            Password: '',
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
        console.log(this.props.history.push)
        this.props.logstate.map((value) => {
            console.log(value.Email)
            if (this.state.Email == value.Email && this.state.Password == value.Password) {
                console.log("logged");
                this.props.dispatch({ type: "LOGGED_IN_USERNAME", name: this.state.Email });
                this.props.dispatch({ type: "LOGIN" })
                return (
                    this.props.history.push("/dashboard")
                )
            }
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" style={{ marginLeft: "20%" }}>
                            <div className="card" style={{ marginTop: "10%" }}>
                                <h1 style={{ marginLeft: "40%", color: "blue" }}><i class="material-icons">lock</i>Login</h1>
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <label for="email"><strong>Email</strong></label>
                                            <input type="text" class="form-control form-control-lg rounded-0" name="Email" placeholder="Enter Email" value={this.state.Email} onChange={this.handleChange} ></input>
                                        </div>
                                        <div className="form-group">
                                            <label><strong>Password</strong></label>
                                            <input type="password" class="form-control form-control-lg rounded-0" name="Password" placeholder="Enter ur Password" value={this.state.Password} onChange={this.handleChange} ></input>
                                        </div>
                                        <button type="submit" class="btn btn-primary " id="btnLogin" style={{ width: "100%" }}>Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        logstate: state.log,
    };
}
export default connect(mapStateToProps)(Login);

