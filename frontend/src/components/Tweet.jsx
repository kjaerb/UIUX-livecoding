import Card from "react-bootstrap/Card";
export function Tweet(props) {
  return (
    <Card>
        <Card.Header>
            <p className="m-0">{props.user.name}</p>
            <small className="text-muted">@{props.user.screen_name}</small>
        </Card.Header>
      <Card.Body>
        <Card.Text>
          {props.tweet}
        </Card.Text>
      </Card.Body>
      <Card.Img variant="bottom" src="https://placehold.co/180x100" />
    </Card>
  );
}
