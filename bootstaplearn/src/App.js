import { Alert, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';

import { Container,Row,Col } from 'react-bootstrap';
function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Oh snap! You got an error!</strong>
        <p>Change this and that and try again.</p>
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <Alert dismissible variant="danger">
      <Alert.Heading>ALert is working now</Alert.Heading>
      <p>Inside alert paragrah here</p>
    </Alert>

    <Alert show={show} variant="success">
        <Alert.Heading>My Alert</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}

    <Container>
      <Row>
        <Col sm={8}>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
