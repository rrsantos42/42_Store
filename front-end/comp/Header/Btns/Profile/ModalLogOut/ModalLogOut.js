import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const ModalLogOut = (props) =>{
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <Dropdown.Item onClick={handleShow}>Log Out</Dropdown.Item>
        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure</Modal.Title>
        </Modal.Header>
        <Modal.Body>This will redirect you to the landing page</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Log out
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}
export default ModalLogOut