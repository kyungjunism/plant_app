import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faLeaf } from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component {
	render() {
		return (
			<div>
				<Menu className={'navbar'}>
					<Menu.Item>
						<Link to="/">
							<Button primary>Your Plants</Button>
						</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to="/addnewplant">
							<Button secondary>
								Add New Plant! + <FontAwesomeIcon icon={faLeaf} />{' '}
							</Button>
						</Link>
					</Menu.Item>
				</Menu>
				<Menu className={'login-signup'}>
					<Menu.Menu position="right">
						<Menu.Item>
							<Link to="/login">
								<Button secondary>Login</Button>
							</Link>
						</Menu.Item>
						<Menu.Item>
							<Link to="/signup">
								<Button primary>
									Sign Up! <FontAwesomeIcon icon={faUserPlus} />
								</Button>
							</Link>
						</Menu.Item>
					</Menu.Menu>
				</Menu>
			</div>
		);
	}
}

export default Navbar;
