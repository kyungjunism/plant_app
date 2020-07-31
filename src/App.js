import React from 'react';
import './App.css';
import axios from 'axios';
import PlantContainer from './containers/PlantContainer';
import Navbar from './components/Navbar';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import DashboardContainer from './containers/DashboardContainer';
import UserUpdate from './components/UserUpdate';
import PlantForm from './components/PlantForm';

class App extends React.Component {
	state = {
		users: [],
		seeForm: false,
		userId: '',
	};

	toggleForm = () => {
		const { seeForm } = this.state;
		this.setState({ seeForm: !seeForm });
	};

	renderForm = () => {
		const { seeForm } = this.state;
		if (seeForm === true) {
			return <UserUpdate />;
		}
	};

	async componentDidMount() {
		try {
			const response = await axios.get('http://localhost:3001/users');

			this.setState({ users: response.data });
		} catch (error) {
			console.log(error);
		}
	}

	async getUsers() {
		try {
			const response = await axios.get('http://localhost:3001/users');

			this.setState({ users: response.data });
		} catch (error) {
			console.log(error);
		}
	}

	handleChange = (event, value) => {
		console.log('value:', value.name);
		console.log('value', value);

		this.setState({
			[value.name]: value.value,
		});
	};
	render() {
		const { users } = this.state;
		const { userId } = this.state;

		if (users.length === 0) {
			return null;
		}

		const amy = users[0];
		return (
			<div className="App">
				<Navbar />
				<Switch>
					<Route path="/signup" component={UserUpdate} />
					<Route path="/addnewplant" render={(props) => <PlantForm plants={amy.plants} />} />
					<Route path="/" render={(props) => <PlantContainer plants={amy.plants} getUsers={this.getUsers} />} />
				</Switch>
			</div>
		);
	}
}
export default App;
