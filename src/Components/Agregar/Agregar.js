import { Button, Modal, Form, InputGroup, Dropdown, FormControl, DropdownButton } from "react-bootstrap"
import { useState } from "react"

const Agregar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Una Comida</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Agregar Comida</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese Comida" />
                    </Form.Group>
                    <Form className="Opciones">
                        <Form.Group controlId="formBasicEmail">
                                <DropdownButton
                                as={InputGroup.Prepend}
                                variant="outline-secondary"
                                title="Dia de Semana"
                                id="input-group-dropdown-1"
                                >
                                <Dropdown.Item href="#">Lunes</Dropdown.Item>
                                <Dropdown.Item href="#">Martes</Dropdown.Item>
                                <Dropdown.Item href="#">Miercoles</Dropdown.Item>
                                <Dropdown.Item href="#">Jueves</Dropdown.Item>
                                <Dropdown.Item href="#">Viernes</Dropdown.Item>
                                <Dropdown.Item href="#">Sabado</Dropdown.Item>
                                <Dropdown.Item href="#">Domingo</Dropdown.Item>
                                </DropdownButton>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                                <DropdownButton
                                as={InputGroup.Prepend}
                                variant="outline-secondary"
                                title="Dia o Noche"
                                id="input-group-dropdown-1"
                                >
                                <Dropdown.Item href="#">Dia</Dropdown.Item>
                                <Dropdown.Item href="#">Noche</Dropdown.Item>
                                </DropdownButton>
                        </Form.Group>
                    </Form>
                    <Button variant="primary" type="submit">
                        Agregar
                    </Button>
                </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}
export default Agregar;