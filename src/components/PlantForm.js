import React from 'react';
import axios from 'axios';
import { Form, Button } from 'semantic-ui-react';
import { addNewPlant } from '../actions/UserActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
		const { plants, triggerAddNewPlant } = this.props;
		const { plant_name, watering_duration, repotted_date, ideal_temperature, pic } = this.state;

		const newPlant = {
			plant_name,
			watering_duration,
			repotted_date,
			ideal_temperature,
			pic,
			last_watered_date: new Date(),
		};
		const updatedPlants = [...plants, newPlant];

		try {
			await triggerAddNewPlant(newPlant);

			// copy this over to userAction addNewPlant()
			// call triggerAddNewPlant here instead
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		const { plant_name, watering_duration, repotted_date, ideal_temperature, pic } = this.state;

		return (
			<Form onSubmit={this.handleSubmitForm} className={'form'}>
				<Form.Field>
					<label>Plant Name</label>
					<Form.Input onChange={this.handleChange} name="plant_name" value={plant_name} placeholder="Your Plant's Name!" />
				</Form.Field>
				<Form.Field>
					<label>Watering Duration</label>
					<Form.Input onChange={this.handleChange} name="watering_duration" value={watering_duration} placeholder="Frequency of Watering" />
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
const mapStateToProps = (state) => {
	return { plants: state.usersData.users[0].plants };
};
const mapDispatchToProps = (dispatch) => {
	return { triggerAddNewPlant: bindActionCreators(addNewPlant, dispatch) };
};
export default connect(mapStateToProps, mapDispatchToProps)(PlantForm);
