import { Button, Modal, Form, InputGroup, Dropdown, DropdownButton } from "react-bootstrap"
import { useState } from "react"
import { getStorageArray, setStorage } from "../../Utils/UtilsStorage"

const Agregar = () => {
    //UseState de Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //UseState de Inputs
    const [ texto, setTexto ] = useState({ comida: " ", dia: " ", temperatura: " " })

    //Funciones
    const ButtonOnSubmit = (e) =>{
        e.preventDefault();
        e.stopPropagation();
        const cuentas = getStorageArray("comida");
        const cuentasUp = [...cuentas, texto];
        setStorage("comida", cuentasUp);
    }
    const OnChange = (e) =>{
        const value = e.target.value;
        const name = e.target["name"];
        const objeto = { ...texto, [name]: value };
        setTexto(objeto);
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Agregar Comida
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Una Comida</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={ButtonOnSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Agregar Comida</Form.Label>
                        <Form.Control type="text" name="comida" onChange={OnChange} placeholder="Ingrese Comida" />
                    </Form.Group>
                    <Form className="Opciones">
                        <Form.Group controlId="formBasicEmail">
                            <select class="form-control"  name="dia" onChange={OnChange} required>
                                <option disabled selected>Para que dia?</option>
                                <option>Lunes</option>
                                <option>Martes</option>
                                <option>Miercoles</option>
                                <option>Jueves</option>
                                <option>Viernes</option>
                                <option>Sabado</option>
                                <option>Domingo</option>
                            </select>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                        <select class="form-control" name="temperatura" onChange={OnChange} required>
                                <option disabled selected>Cuando hace Calor o Frio?</option>
                                <option>Frio</option>
                                <option>Calor</option>
                            </select>
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