import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Form, Col, Row, Button, Alert,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { reviewReset } from '../../redux/actionCreators';
import submitReview from '../../redux/thunks/submitReview.js';

export default function () {
  const dispatch = useDispatch();

  const movie = useSelector((state) => state.movie);
  const reviewPending = useSelector((state) => state.reviewPending);
  const reviewSubmittedSuccessfully = useSelector((state) => state.reviewSubmittedSuccessfully);
  const review = useSelector((state) => state.review);

  const [input, setInput] = useState({
    name: '',
    email: '',
    review: '',
  });

  useEffect(() => () => {
    dispatch(reviewReset());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitReview(input));
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  if (reviewSubmittedSuccessfully) {
    return (
      <Row className="justify-content-center">
        <Col md={6}>
          <Alert variant="success" className="my-3">
            Review submitted!
          </Alert>
          <h4>{`Name: ${review.name}`}</h4>
          <h4>{`Email: ${review.email}`}</h4>
          <h4>Review:</h4>
          <div className="text-wrap">
            <p>{review.review}</p>
          </div>
          <Link to="/">
            <Button variant="success">
              Return to movie list
            </Button>
          </Link>
        </Col>
      </Row>
    );
  }

  return (
    <Row className="justify-content-center">
      <Col md={6}>
        <h3>
          {movie && `Please write your review for ${
            movie.title}`}
        </h3>
        <Form onSubmit={(e) => { handleSubmit(e); }}>
          <Form.Group controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Enter your name" required value={input.name} onChange={(e) => handleChange(e)} />
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter your email" required value={input.email} onChange={(e) => handleChange(e)} />
          </Form.Group>
          <Form.Group controlId="formGroupReview">
            <Form.Label>Write your review</Form.Label>
            <Form.Control name="review" as="textarea" required rows="5" value={input.review} onChange={(e) => handleChange(e)} />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={reviewPending}>
            { reviewPending ? (
              <>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                {' Review pending...'}
              </>
            ) : 'Submit review' }
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
