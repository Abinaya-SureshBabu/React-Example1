import React from 'react';
import { connect } from 'react-redux';

class Register extends React.Component {
    state = {
        Name: '',
        Email: '',
        Password: ''
    }
    handlechange = (e) => {
        e.preventDefault();
        e.target.value === "" ? e.target.style.border = "1px solid red" : e.target.removeAttribute('style');
        this.setState({ [e.target.name]: e.target.value });
    }
    handlesubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.adddata(this.state);
        this.props.history.push("/")
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" style={{ marginLeft: "20%" }}>
                            <div className="card" style={{ marginTop: "10%" }}>
                                <div className="card-header">
                                    <h3 className="mb-0">Register</h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.handlesubmit}>
                                        <div className="form-group">
                                            <label for="Name">Name</label>
                                            <input type="text" class="form-control" name="Name" placeholder="Enter name" className="form-control" value={this.state.name} onChange={this.handlechange} ></input>
                                        </div>
                                        <div className="form-group">
                                            <label for="email">Email</label>
                                            <input type="email" class="form-control" name="Email" placeholder="Enter ur Email" className="form-control" value={this.state.email} onChange={this.handlechange} ></input>
                                        </div>
                                        <div className="form-group">
                                            <label for="password">Password</label>
                                            <input type="password" class="form-control" name="Password" placeholder="Enter password" className="form-control" onChange={this.handlechange} value={this.state.password}></input>
                                        </div>
                                        {
                                    this.props.settingsreducer.AllowRegistration ?
                                        <div>
                                            <button className="btn btn-primary mt-3" style={{ width: "100%", color: "white" }}>Register</button>
                                        </div> :
                                        <div>
                                            <button className="btn btn-primary mt-3" style={{ width: "100%", color: "white" }} disabled>Register</button>
                                        </div>
                                        }
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
function mapDispatchToProps(dispatch) {
    console.log("from mapDispatchToProps of register")
    return {
        adddata: (data) => dispatch({ type: "User_Data", value: data })
    }
}
const mapStateToProps = (state) => {
    return {
        settingsreducer: state.setting
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);


