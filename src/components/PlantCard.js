import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import { Image } from 'react-bootstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faThermometerHalf, faSeedling, faSadCry, faShower } from '@fortawesome/free-solid-svg-icons';

const today = new Date();
console.log(today);

class PlantCard extends React.Component {
	render() {
		const { plants, handleDelete } = this.props;
		return (
			<Card className={'card'}>
				<Card.Content>
					<Card.Header className={'card-header'}>
						<Card.Meta className={'plant-name'}>
							{plants.plant_name}
							<FontAwesomeIcon icon={faSeedling} />
						</Card.Meta>
						<Image className={'plant-image'} src={plants.pic} size="tiny" />
						<Card.Description className={'description'}>
							<p>Watering Duration: {plants.watering_duration} day intervals</p>
							<p>Water Overdue: {plants.water_overdue}</p>
							<p>Repotted Date: {plants.repotted_date}</p>
							<p>
								Ideal Temperature: {plants.ideal_temperature}°F <FontAwesomeIcon icon={faThermometerHalf} />
							</p>
						</Card.Description>
					</Card.Header>
					<Button className="water-button">
						I Watered My Plant! <FontAwesomeIcon icon={faShower} />
					</Button>
					<Button className="delete-plant" onClick={() => handleDelete(plants.id)}>
						Delete <FontAwesomeIcon icon={faSadCry} /> <FontAwesomeIcon icon={faTrash} />
					</Button>
				</Card.Content>
			</Card>
		);
	}
}

export default PlantCard;
