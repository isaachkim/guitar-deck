import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import './Home.css'

function Home(props) {
    const [show, setShow] = useState(false);

		const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);
	return (
		<div className='home'>
			<title>Homepage</title>
			<div className='home-container'>
				<h1>Welcome to Guitar-Deck</h1>
				<h2>click below for instructions</h2>
				<div className='home-instructions'>
					<button
						style={{
							backgroundColor: '#DC7633',
						}}
						onClick={handleShow}>
						Instructions
					</button>
				</div>
			</div>

			<Modal
				className={'modal'}
				show={show}
				onHide={handleClose}
				animation={false}>
				<Modal.Header closeButton>
					<Modal.Title>Instructions</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<img
						className={'instructions'}
						src='images/instructions.jpeg'
						alt=''
					/>
				</Modal.Body>
				<Modal.Footer>
					<button
						className='modal-button'
						style={{
							backgroundColor: '#3498DB',
						}}
						onClick={handleClose}>
						Close
					</button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default Home;
