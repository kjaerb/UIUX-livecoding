import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export default function TweetPost() {
  const [input, setInput] = useState("");

  function submit(e) {
    e.preventDefault();
    console.log(input);
  }
  return (
    <Form onSubmit={submit}>
      <Form.Group controlId="input">
        <Form.Control
          as="textarea"
          placeholder="Post an tweet..."
          className="p-1 rounded-0 rounded-top"
          defaultValue={input}
            onChange={(e) => setInput(e.target.value)}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        className="rounded-0 rounded-bottom col-12"
      >
        Post
      </Button>
    </Form>
  );
}
