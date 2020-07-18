import React from 'react';
import PlantCard from '../components/PlantCard';
import { Card } from 'semantic-ui-react';

class PlantContainer extends React.Component {
	render() {
		const { plants } = this.props;

		let renderPlants = [...plants];

		return (
			<Card.Group>
				{renderPlants.map((plants) => {
					return <PlantCard plants={plants} />;
				})}
			</Card.Group>
		);
	}
}

export default PlantContainer;
