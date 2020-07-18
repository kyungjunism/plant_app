import React from 'react';
import { Card, Image } from 'semantic-ui-react';

class PlantCard extends React.Component {
	render() {
		const { plant } = this.props;
		return (
			<Card>
				<Card.Content>
					<Image floated="right" size="mini" src="https://react.semantic-ui.com/images/avatar/large/steve.jpg" />
					<Card.Header>
						<span>
							<Card.Meta>{plant.last_watered_date}</Card.Meta>
						</span>
					</Card.Header>
				</Card.Content>
			</Card>
		);
	}
}

export default PlantCard;
