import React from 'react';
import PlantCard from '../components/PlantCard';

const today = new Date();
console.log(today);

class DashboardContainer extends React.Component {
	render() {
		const { plants } = this.props;
		return (
			<div className="dashboard-container">
				<h3> {console.log(today)}</h3>
				<h3>Plant Dashboard</h3>
				<header>
					<p>My Plants</p>
				</header>
				<PlantCard plants={plants} />;
			</div>
		);
	}
}
export default DashboardContainer;
