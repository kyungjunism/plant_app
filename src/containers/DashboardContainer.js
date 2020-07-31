import React from 'react';

class DashboardContainer extends React.Component {
	render() {
		const { plants } = this.props;
		return (
			<div className="dashboard-container">
				<h3>Plant Dashboard</h3>
				<header>
					<p>Plants</p>
				</header>
				<PlantsDnd plants={plants} />; {/*passing */}
			</div>
		);
	}
}

export default DashboardContainer;
