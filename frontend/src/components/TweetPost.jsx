import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export default function TweetPost() {
  const [input, setInput] = useState("");

  function submit(e) {
    e.preventDefault();
    fetch("http://localhost:8080/tweet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tweet: input }),
    }).then((response) => {
      if (response.status === 200) {
        setInput("");
      } else {
        alert("Something went wrong");
      }
    });
  }
  return (
    <Form onSubmit={submit}>
      <Form.Group controlId="input">
        <Form.Control
          as="textarea"
          placeholder="Post an tweet..."
          className="p-1 rounded-0 rounded-top"
          defaultValue={input}
          value={input}
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
