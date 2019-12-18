import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class Dashboard extends React.Component {
    createdetails() {
        return this.props.clientdata.map((data, index) => {
            return (
                <tr key={index}>
                    <td >{data.Firstname + " " + data.Lastname}</td>
                    <td>{data.Email}</td>
                    <td>$ {data.balance}</td>
                    <td><Link to={"/details/" + index}> <button className="btn btn-md float-right bg-dark" style={{ color: "white" }}><i className="material-icons" style={{ float: "left" }}>arrow_right_alt</i>Details</button></Link></td>
                </tr>
            )
        });
    }
    total() {
        let sum = 0;
        this.props.clientdata.map((data) => {
            sum = sum + parseInt(data.balance);
        })
        return (sum)
    }
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div class="row justify-content-between mt-3">
                        <div class="col-md-10" >
                            <h3 class="mb-0" style={{ display: "inline-block" }}><i class="material-icons">group</i>Clients</h3>
                            <span style={{ float: "right", fontSize: "25px" }}>Total Owed <span style={{ color: "blue", marginRight: "12px" }}><b>${this.total()}</b></span></span>
                        </div>
                        <div class="col-md-2" >
                            <Link to="/add" style={{ color: "white" }}> <button class="btn btn-success " id="btnnew" style={{ width: "70%" }} >+New</button></Link>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row justify-content-between">
                        <div class="col-md-10" >
                            <table class="table table-striped ml-4">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Balance</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.createdetails()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
function mapStateToProps(state) {
    return {
        clientdata: state.clientdetails
    };
}
export default connect(mapStateToProps)(Dashboard);


