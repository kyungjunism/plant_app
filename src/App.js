import React from 'react';
import './App.css';
import axios from 'axios';
import PlantContainer from './containers/PlantContainer';
import Navbar from '.components/Navbar';

class App extends React.Component {
	state = {
		plants: [],
	};

	async componentDidMount() {
		const response = await axios.get('http://localhost:3001/plants');
		this.setState({ plants: response.data });
	}

	async getPlants() {
		try {
			const response = await axios.get('http://localhost:3001/plant');

			this.setState({ plants: response.data });
		} catch (error) {
			console.log(error);
		}
	}

	handleChange = (event, value) => {
		console.log('value:', value.plant);
		console.log('value', value);

		this.setState({
			[value.plant]: value.value,
		});
	};
	render() {
		const { plants } = this.state;
		return (
			<div className="Navbar">
				<Navbar />
				<Switch>
					<Route path="/signup" component={UserUpdate} />
					<Route path="/dashboard" render={(props) => <DashboardContainer plants={amy.plants} />} />
					<Route path="/" render={(props) => <PlantsContainer plants={amy.plants} getUsers={this.getUsers} />} />
				</Switch>
				<PlantContainer plants={plants} />
			</div>
		);
	}
}
export default App;
