import Modal from "react-bootstrap/Modal";
export default function ImageOverlay(props) {
  return (
    <Modal
      size="lg"
      fullscreen="md-down"
      show={props.show}
      onHide={props.handleClose}
      centered={true}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <img alt="" className="w-100" src={props.img} />
      </Modal.Body>
    </Modal>
  );
}
