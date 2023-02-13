import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
const ModalDeleteItem = (props) =>{
	const [show, setShow] = useState(false);
	let productUrl =`https://store-test-c9b34-default-rtdb.firebaseio.com/Cart/${props.item}.json`;

	const handleClose = () => {
		 const deletePost = async () => {
			await axios.delete(productUrl);
			window.location.reload(true)
		}
		
		deletePost();
		setShow(false);
	}
	const handleShow = () => setShow(true);
	const handleOpen = () => {
		console.log("true");
		setShow(false)
	}
	return (
	  <>
		<Button variant="primary" onClick={handleShow}>
		  <FaTrashAlt/>
		</Button>
  
		<Modal show={show} onHide={handleOpen}>
		  <Modal.Header closeButton>
			<Modal.Title>Modal heading</Modal.Title>
		  </Modal.Header>
		  <Modal.Body>You Sure You Wanna Delete This Item</Modal.Body>
		  <Modal.Footer>
			<Button variant="secondary" onClick={handleOpen}>
			  Close
			</Button>
			<Button variant="success" onClick={handleClose}>
			  Delete Item
			</Button>
		  </Modal.Footer>
		</Modal>
	  </>
	)
};

export default ModalDeleteItem