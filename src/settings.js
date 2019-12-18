import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class Settings extends React.Component {
    constructor(props) {
        super(props)
        this.register = this.register.bind(this)
        this.add = this.add.bind(this)
        this.edit = this.edit.bind(this)
    }
    register(e) {
        let change1 = e.target.checked
        this.props.dispatch({ type: "AllowRegistration", value: change1 });
    }
    add(e1) {
        let change2 = e1.target.checked
        this.props.dispatch({ type: "DisableBalanceOnAdd", value: change2 })
    }
    edit(e2) {
        let change3 = e2.target.checked
        this.props.dispatch({ type: "DisableBalanceOnEdit", value: change3 })
    }
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <Link to="/dashboard" style={{ color: "blue" }}><i class="material-icons" style={{ float: "left" }}>keyboard_backspace</i>Back To Dashboard</Link>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row mt-3">
                        <div className="card" style={{ width: "100%" }}>
                            <div className="card-header">
                                <h3>Edit Settings</h3>
                            </div>
                            <div className="card-body">
                                <div className="checkbox"  >
                                    <label>Allow Registration</label>
                                    <input type="checkbox" name="AllowRegistration" checked={this.props.settingsreducer.AllowRegistration} onChange={this.register}></input>
                                </div>
                                <div className="checkbox">
                                    <label>Disable Balance on Add </label>
                                    <input type="checkbox" name="DisableBalanceOnAdd" checked={this.props.settingsreducer.DisableBalanceOnAdd} onChange={this.add}></input>
                                </div>
                                <div className="checkbox">
                                    <label>Disable Balance on Edit</label>
                                    <input type="checkbox" name="DisableBalanceOnEdit" checked={this.props.settingsreducer.DisableBalanceOnEdit} onChange={this.edit}></input>
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
    console.log(state.user)
    return {
        user: state.user,
        settingsreducer: state.setting
    };
}
export default connect(mapStateToProps)(Settings);

