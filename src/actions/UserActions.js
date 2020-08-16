import axios from 'axios';

//Actions are what you want the app to do
//Start here. Actions > Reducers > Then App.js stuff
export const FETCH_USERS_LIST = 'FETCH_USERS_LIST';
export const ADD_NEW_PLANT = 'ADD_NEW_PLANT';
export const DELETE_USERS = 'DELETE_USERS';

export const getUsersList = () => {
	console.log('function being called IN userActions');
	return async (dispatch, getState) => {
		try {
			const response = await axios.get('http://localhost:3002/users');
			//const users = response.data; CAN BE HERE OR BELOW
			dispatch({
				//allows you to send info to reducer
				type: FETCH_USERS_LIST, //name of actions
				payload: {
					users: response.data,
				},
			}); // the data that is sent to the reducer
		} catch (err) {
			console.error('err: ', err.message);
		}
	};
};

//deleting the global store
export const deleteUsersList = () => {
	return async (dispatch, getState) => {
		dispatch({
			// eslint-disable-next-line no-undef
			type: DELETE_USERS,
			payload: {
				users: [],
			},
		});
	};
};

// new plant add states
export const addNewPlant = (newPlant) => {
	console.log('add new plant');
	return async (dispatch, getState) => {
		const {
			usersData: { users },
		} = getState();
		const plants = users[0].plants;
		console.log('plants', plants);
		const updatedUser = { ...users[0] };
		updatedUser.plants = [...plants, newPlant];
		try {
			await axios.patch(`http://localhost:3002/users/1`, { plants: [...updatedUser.plants] });
		} catch (error) {
			console.log(error);
		}
		dispatch({
			type: ADD_NEW_PLANT,
			payload: {
				users: [updatedUser],
			},
		});
	};
};
