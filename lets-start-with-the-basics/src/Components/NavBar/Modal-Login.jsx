import { useState } from "react";
import { Modal, Button, Nav, ModalFooter } from "react-bootstrap";
import { BiUser } from "react-icons/bi";
import FormRegistrationAndAuthorization from "../../Forms/FormRegistrationAndAuthorization";

const ModalLogin = () => {
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const [isRegistration, setRegistration] = useState(false);
    const [formState, setFormState] = useState(true);
    const handleClose = () => setShow(false);
    return (
        <Nav>
            <Button variant="secondary" onClick={handleShow}>
                <BiUser />
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ marginRight: "40px" }}>
                        {isRegistration ? <div>Регистрация</div> : <div>Вход</div>}
                    </Modal.Title>
                    {isRegistration ?
                        <Button variant="dark" onClick={() => { setRegistration(false) }}>Войти</Button>
                        : <Button variant="dark" onClick={() => { setRegistration(true) }}>Регистрация</Button>}
                </Modal.Header>
                <Modal.Body>
                    <FormRegistrationAndAuthorization handleClose={handleClose} isRegistration={isRegistration} />
                </Modal.Body>
                
            </Modal>
        </Nav>
    )
}
export default ModalLogin