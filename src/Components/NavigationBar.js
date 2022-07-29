import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

function NavigationBar(props) {
	let navigate = useNavigate();

	function handleHome(){
		navigate('/')
	}
	function handleC(){
		navigate('/guitardeck/C')
	}

	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Container fluid>
				<Navbar.Brand onClick={handleHome}>Home</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr=auto'>
						<NavDropdown
							id='nav-dropdown-dark-example'
							title='Chords'
							menuVariant='dark'>
							<NavDropdown.Item onClick={handleC}>C</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.2'>
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href='#action/3.4'>
								Separated link
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavigationBar;
