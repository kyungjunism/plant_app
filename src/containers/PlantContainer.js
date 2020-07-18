import React from 'react';
import PlantCard from '../components/PlantCard';

class PlantContainer extends React.Component {
	renderPlants() {
		const { plants } = this.props;
		return plants.map((plant) => {
			return (
				<div>
					<p>{plant.plant_name}</p>
					<p>{plant.watering_duration}</p>
					<p>{plant.last_watered_date}</p>
					<p>{plant.water_overdue}</p>
					<p>{plant.ideal_temperature}</p>
				</div>
			);
		});
	}

	render() {
		return <PlantCard>this.renderPlants()</PlantCard>;
	}
}

export default PlantContainer;
