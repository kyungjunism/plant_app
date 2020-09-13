import React from 'react';
import PlantCard from '../components/PlantCard';
import { Card, Button, Modal } from 'semantic-ui-react';
import PlantForm from '../components/PlantForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTh } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

class PlantContainer extends React.Component {
	handleDelete = async (plantId) => {
		const { plants, getUsers } = this.props;
		const plantsDeleted = [...plants].filter((plant) => {
			console.log('plantId', plantId);
			if (plant.id === plantId) {
				return false;
			}
			return true;
		});
		try {
			await axios.patch('http://localhost:3001/users/1', { plants: [...plantsDeleted] });
			await getUsers();
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		const { plants } = this.props;

		let renderPlants = [...plants];

		return (
			<div>
				<div className={'plant-container'}>
					<Card.Group>
						{renderPlants.map((plants) => {
							return <PlantCard plants={plants} handleDelete={this.handleDelete} />;
						})}
					</Card.Group>
				</div>
			</div>
		);
	}
}

export default PlantContainer;
