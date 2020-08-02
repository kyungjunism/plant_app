import React from 'react';
import axios from 'axios';
import { Form, Button } from 'semantic-ui-react';
import ReactDOM from 'react-dom';

class PlantForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			plant_name: '',
			watering_duration: '',
			last_watered_date: '',
			water_overdue: '',
			repotted_date: '',
			ideal_temperature: '',
			pic: '',
		};
	}

	handleChange = (event) => {
		let name = event.target.name;
		let value = event.target.value;
		console.log('FUCKING TEXT', value);
		this.setState({
			[name]: value,
		});
	};

	handleSubmitForm = async () => {
		const { plants } = this.props;
		const { plant_name, watering_duration, last_watered_date, water_overdue, repotted_date, ideal_temperature, pic } = this.state;

		const newPlant = {
			plant_name,
			watering_duration,
			last_watered_date,
			water_overdue,
			repotted_date,
			ideal_temperature,
			pic,
		};
		const updatedPlants = [...plants, newPlant];

		try {
			await axios.patch('http://localhost:3001/users/1', { plants: [...updatedPlants] });
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		const { plant_name, watering_duration, last_watered_date, water_overdue, repotted_date, ideal_temperature, pic } = this.state;

		return (
			<Form onSubmit={this.handleSubmitForm}>
				<Form.Field>
					<label>Plant Name</label>
					<Form.Input onChange={this.handleChange} name="plant_name" value={plant_name} placeholder="Your Plant's Name!" />
				</Form.Field>
				<Form.Field>
					<label>Watering Duration</label>
					<Form.Input onChange={this.handleChange} name="watering_duration" value={watering_duration} placeholder="Frequency of Watering" />
				</Form.Field>
				<Form.Field>
					<label>Last Watered Date</label>
					<Form.Input onChange={this.handleChange} name="last_watered_date" value={last_watered_date} placeholder="Date Last Watered" />
				</Form.Field>
				<Form.Field>
					<label>Repotted Date</label>
					<Form.Input onChange={this.handleChange} name="repotted_date" value={repotted_date} placeholder="Last Re-potting" />
				</Form.Field>
				<Form.Field>
					<label>Ideal Temperature</label>
					<Form.Input onChange={this.handleChange} name="ideal_temperature" value={ideal_temperature} placeholder="Plant Ideal Temp" />
				</Form.Field>
				<Form.Field>
					<label>Picture of Plant</label>
					<Form.Input onChange={this.handleChange} name="pic" value={pic} placeholder="Picture of Your Plant!" />
				</Form.Field>
				<Button type="submit">Submit!</Button>
			</Form>
		);
	}
}
export default PlantForm;
