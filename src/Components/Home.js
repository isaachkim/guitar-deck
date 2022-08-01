import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Home.css'

function Home(props) {
    const [show, setShow] = useState(false);

		const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);
	return (
		<div className='home'>
			<div>
				<h1>Welcome to Guitar-Deck</h1>
				<h2>instructions</h2>
			</div>
			<Button variant='primary' onClick={handleShow}>
				Instructions
			</Button>

			<Modal className = {"modal"} show={show} onHide={handleClose} animation={false}>
				<Modal.Header closeButton>
					<Modal.Title>Instructions</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<img className={'instructions'} src='images/instructions.jpeg' alt='' />
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default Home;
