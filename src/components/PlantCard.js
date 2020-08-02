import React from 'react';
import { Card, Form, Button } from 'semantic-ui-react';
import { Image } from 'react-bootstrap';
import axios from 'axios';

class PlantCard extends React.Component {
	update_water_plant = async () => {
		const { watered } = this.state;

		const water_plant = {
			watered,
		};

		try {
			const response = await axios.post('http://localhost:3001/users/1', watered);
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = (event, value) => {
		console.log('value', value);
		this.setState({
			watered: Date.now,
		});
	};

	render() {
		const { plants, watered } = this.props;
		return (
			<Card className={'card'}>
				<Card.Content>
					<Card.Header clasName={'card-header'}>
						<Card.Meta className={'plant-basicinfo'}>Plant Name: {plants.plant_name}</Card.Meta>
						<Image className={'plant-image'} src={plants.pic} size="tiny" />
						<Card.Description>
							<p>Watering Duration: {plants.watering_duration} day intervals</p>
							<p>Water Overdue: {plants.water_overdue}</p>
							<p>Repotted Date: {plants.repotted_date}</p>
							<p>Ideal Temperature: {plants.ideal_temperature}</p>
						</Card.Description>
						<Form className={'water-button'} onSumbit={this.update_water_plant}>
							<Form.Input onChange={this.handleChange}>{(plants.watered = Date.now)}</Form.Input>
							<Button type="update">Water!</Button>
						</Form>
					</Card.Header>
				</Card.Content>
			</Card>
		);
	}
}

export default PlantCard;
