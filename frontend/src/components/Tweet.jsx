import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { useState } from "react";

export function Tweet(props) {
  const [likes, setLikes] = useState(0);

  function addLike() {
    setLikes(likes + 1);
  }



  return (
      <Card>
        <Card.Header className="d-flex justify-center align-center">
          <img
            src={`https://api.dicebear.com/6.x/lorelei/png/seed=${props.user.screen_name}`}
            alt="profile"
            className="rounded-circle"
            style={{ width: "3rem", height: "3rem" }}
          />
          <div className="d-flex flex-column">
            <p className="m-0">{props.user.name}</p>
            <small className="text-muted">@{props.user.screen_name}</small>
            <small className="text-muted">{new Date(props.createdAt).toDateString()}</small>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Text>{props.tweet}</Card.Text>
          <Card.Img
            className="rounded"
            variant="bottom"
            src={props.img}
          />
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" onClick={() => addLike()}>
            Like{" "}
            <Badge bg="light" text="black">
              {likes}
            </Badge>
          </Button>
        </Card.Footer>
      </Card>
  );
}
