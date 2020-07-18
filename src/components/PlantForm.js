import React from 'react';
import axios from 'axios';
import { Form } from 'semantic-ui-react';

class PlantForm extends React.Component {
	state = {
		plant_name: '',
		watering_duration: '',
		last_watered_date: '',
		water_overdue: '',
		repotted_date: '',
		ideal_temperature: '',
	};

	handleChange = (event, value) => {
		console.log('value', value);

		this.setState({
			[value.plant]: value,
		});
	};

	handleSubmitForm = async () => {
		const { plants } = this.props;
		const { plant_name, watering_duration, last_watered_date, water_overdue, repotted_date, ideal_temperature } = this.state;

		const newPlant = {
			plant_name,
			watering_duration: parseInt(watering_duration),
			last_watered_date: parseInt(last_watered_date),
			water_overdue: parseInt(water_overdue),
			repotted_date: parseInt(repotted_date),
			ideal_temperature: parseInt(ideal_temperature),
		};
		const updatedPlants = [...plants, newPlant];

		try {
			await axios.patch('http://localhost:3001/plants', { plants: [...updatedPlants] });
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		const { plant_name, watering_duration, last_watered_date, water_overdue, repotted_date, ideal_temperature } = this.state;

		return (
			<Form onSubmit={this.handleSubmitForm}>
				<Form.Field>
					<label>Plant Name</label>
					<Form.Input onChange={this.handleChange} name="plantName" value={plant_name} placeholder="plantName" />
				</Form.Field>
				<Form.Field>
					<label>Watering Duration</label>
					<Form.Input onChange={this.handleChange} name="wateringDuration" value={watering_duration} placeholder="wateringDuration" />
				</Form.Field>
				<Form.Field>
					<label>Last Watered Date</label>
					<Form.Input onChange={this.handleChange} name="lastWateredDate" value={last_watered_date} placeholder="lastWateredDate" />
				</Form.Field>
				<Form.Field>
					<label>Water Overdue</label>
					<Form.Input onChange={this.handleChange} name="waterOverdue" value={water_overdue} placeholder="waterOverdue" />
				</Form.Field>
				<Form.Field>
					<label>Repotted Date</label>
					<Form.Input onChange={this.handleChange} name="repottedDate" value={repotted_date} placeholder="repottedDate" />
				</Form.Field>
				<Form.Field>
					<label>Ideal Temperature</label>
					<Form.Input onChange={this.handleChange} name="idealTemperature" value={ideal_temperature} placeholder="idealTemperature" />
				</Form.Field>
			</Form>
		);
	}
}
export default PlantForm;
