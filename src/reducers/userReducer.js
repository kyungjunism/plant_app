//has the initial state and the changed state due to the action

import { FETCH_USERS_LIST, DELETE_USERS, ADD_NEW_PLANT } from '../actions/UserActions';

const initialState = {
	users: [],
};

function userReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_USERS_LIST:
			console.log('USER REDUCER CATCH');
			const { users } = action.payload;
			return {
				...state,
				users: users,
			};

		case DELETE_USERS:
			return {
				...state,
				users: action.payload.users, //equal to the empty array in UserActions
			};
		case ADD_NEW_PLANT:
			return {
				...state,
				users: action.payload.users,
			};

		default:
			return state;
	}
}

export default userReducer;
