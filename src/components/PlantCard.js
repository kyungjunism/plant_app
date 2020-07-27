import React from 'react';
import { Card, Image } from 'semantic-ui-react';

class PlantCard extends React.Component {
	render() {
		const { plants } = this.props;
		return (
			<Card>
				<Card.Content>
					<Image floated="right" size="mini" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDrlzm9S9wfxua1R1hsW4u42Kn7vTYDA5FdA&usqp=CAU" />
					<Card.Header>
						<span>
							<Card.Meta>Status: {plants.plant_name}</Card.Meta>
							<Card.Description>
								<p>Watering Duration: {plants.watering_duration}</p>
								<p>Water Overdue: {plants.water_overdue}</p>
								<p>Repotted Date: {plants.repotted_date}</p>
								<p>Ideal Temperature: {plants.ideal_temperature}</p>
							</Card.Description>
						</span>
					</Card.Header>
				</Card.Content>
			</Card>
		);
	}
}

export default PlantCard;
