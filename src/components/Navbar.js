import React from 'react';
import { link } from 'react-router-dom';
import { Button, Menu } from 'semantic-ui-react';

class Navbar extends React.Component {
	render() {
		return (
			<Menu>
				<Menu.Item>
					<Link to="/newplant">New Plant</Link>
				</Menu.Item>
				.
			</Menu>
		);
	}
}

export default Navbar;
