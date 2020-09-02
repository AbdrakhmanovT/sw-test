import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './components/MovieList';
import Movie from './components/Movie';
import Review from './components/Review';

function App() {
  return (
    <Container fluid>
      <Router>
        <Switch>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/">
            <Row className="justify-content-center my-3">
              <Col xs={3}>
                <MovieList />
              </Col>
              <Col xs={5}>
                <Movie />
              </Col>
            </Row>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
