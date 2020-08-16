//Reducers Handle the actions (more like an actions handler rather than some reducer
//Could have been named something else like "actionReducer"
import userReducer from './userReducer';
import { combineReducers } from 'redux';

//Setting up a const to combine all reducers
const rootReducer = combineReducers({
	usersData: userReducer,
	//postData: postReducer,
	//commentsData: commentsReducer,
});

export default rootReducer;
