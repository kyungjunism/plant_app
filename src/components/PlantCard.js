import React from 'react';
import { Card } from 'semantic-ui-react';
import { Image } from 'react-bootstrap';

class PlantCard extends React.Component {
	render() {
		const { plants } = this.props;
		return (
			<Card className={'card'}>
				<Card.Content>
					<Card.Header>
						<span>
							<Card.Meta>Plant Name: {plants.plant_name}</Card.Meta>
							<Image className={'plant-image'} src={plants.pic} size="tiny" />
							<span>Plant Name: {plants.plant_name}</span>
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
