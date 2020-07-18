import React from 'react';
import { Card, Image } from 'semantic-ui-react';

class PlantCard extends React.Component {
	render() {
		const { plants } = this.props;
		return (
			<Card>
				<Card.Content>
					<Image floated="right" size="mini" src="https://react.semantic-ui.com/images/avatar/large/steve.jpg" />
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
