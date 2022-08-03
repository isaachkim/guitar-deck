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
			<div>
				<h1>Welcome to Guitar-Deck</h1>
				<h2>instructions</h2>
			</div>
			<button
				style={{
					backgroundColor: '#DC7633',
				}}
				onClick={handleShow}>
				Instructions
			</button>

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
						style={{
							backgroundColor: '#99A3A4',
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
