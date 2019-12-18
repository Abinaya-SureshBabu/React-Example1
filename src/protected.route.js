import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const ProtectedRoute=({component:Component,authenticated,...rest})=>{
    return(
        <Route {...rest} render={
            (props) =>{
                if(authenticated.authentication){
                    return <Component {...props}/>
                }
                else{
                    return <Redirect
                    to={
                        {
                            pathname:"/",
                            state:{
                                from:props.location
                            }
                        }
                    }
                    />
                }
            }
        }/>
    )
}
const mapStateToProps = (state) => {
    return {
        authenticated: state.auth,
    };
}
export default connect(mapStateToProps)(ProtectedRoute)
