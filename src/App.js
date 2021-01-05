import './App.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './components/footer';
import Home from './pages/home';
import BookAdd from "./pages/books/add";

function App() {
  return (
    <Router>
      <Container fluid className=" main-wrapper ">
        <Row >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/books" component={()=> <Redirect to="/" />} />
            <Route  path="/books/add" component={BookAdd} />
          </Switch>
        </Row>
        <Row >
          <Col xs={12} className="px-0" >
            <Footer />
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
