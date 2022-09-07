import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Create = () => {
    return ( 
    <Form>
      <Form.Group className="mb-3" controlId="blog_title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" /> 
      </Form.Group>

      <Form.Group className="mb-3" controlId="body_post">
        <Form.Label>Enter post</Form.Label>
        <Form.Control as="textarea" placeholder="type blog..."  rows={3} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="author">
      <Form.Label>author</Form.Label>
        <Form.Control type="text" placeholder="author of the blog" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Save blog
      </Button>
      
    </Form>
     );
}
 
export default Create;