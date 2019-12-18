import detailsreducer from './detailsreducer'
import { combineReducers } from 'redux'
import login from './islogged'
import loggedusers from './loggeduser'
import authreducer from './authenticationreducer'
import settingsreducer from './settingsreducer'

const corereducer = combineReducers({
    clientdetails: detailsreducer,
    log: login,
    user: loggedusers,
    auth: authreducer,
    setting: settingsreducer
})
export default corereducer;
