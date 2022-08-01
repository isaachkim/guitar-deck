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
	function handleAm(){
		navigate('/guitardeck/Am')
	}
	function handleA() {
		navigate('/guitardeck/A');
	}
	function handleC() {
		navigate('/guitardeck/C');
	}
	function handleD() {
		navigate('/guitardeck/D');
	}
	function handleDm() {
		navigate('/guitardeck/Dm');
	}
	function handleE() {
		navigate('/guitardeck/E');
	}
	function handleEm() {
		navigate('/guitardeck/Em');
	}
	function handleF() {
		navigate('/guitardeck/F');
	}
	function handleG() {
		navigate('/guitardeck/G');
	}


	return (
		<Navbar
			collapseOnSelect
			expand='lg'
			bg='dark'
			variant='dark'
			className='navbar'>
			<Container fluid>
				<Navbar.Brand onClick={handleHome}>Home</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr=auto'>
						<NavDropdown
							id='nav-dropdown-dark-example'
							title='Chords'
							menuVariant='dark'>
							<NavDropdown.Item onClick={handleAm}>Am</NavDropdown.Item>
							<NavDropdown.Item onClick={handleA}>A</NavDropdown.Item>
							<NavDropdown.Item onClick={handleC}>C</NavDropdown.Item>
							<NavDropdown.Item onClick={handleD}>D</NavDropdown.Item>
							<NavDropdown.Item onClick={handleDm}>Dm</NavDropdown.Item>
							<NavDropdown.Item onClick={handleE}>E</NavDropdown.Item>
							<NavDropdown.Item onClick={handleEm}>Em</NavDropdown.Item>
							<NavDropdown.Item onClick={handleF}>F</NavDropdown.Item>
							<NavDropdown.Item onClick={handleG}>G</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavigationBar;
