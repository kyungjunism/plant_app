import React from 'react';
import PlantCard from '../components/PlantCard';
import { Card, Button, Modal } from 'semantic-ui-react';
import PlantForm from '../components/PlantForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTh } from '@fortawesome/free-solid-svg-icons';

class PlantContainer extends React.Component {
	render() {
		const { plants } = this.props;

		let renderPlants = [...plants];

		return (
			<div>
				<div className={'plant-container'}>
					<Card.Group>
						{renderPlants.map((plants) => {
							return <PlantCard plants={plants} />;
						})}
					</Card.Group>
				</div>
			</div>
		);
	}
}

export default PlantContainer;
