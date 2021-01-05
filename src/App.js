import './App.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Home from './pages/home';
import Footer from './components/footer';

function App() {
  return (
    <Container fluid className=" main-wrapper ">
      <Row >
        <Home />
      </Row>
      <Row >
        <Col xs={12} className="px-0" >
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
