import PropTypes from "prop-types";
import ReactDom from "react-dom";
import { Overlay, Container, Footer } from "./styles";
import Button from "../Button";

export default function Modal({ danger }) {
  return ReactDom.createPortal(

    <Overlay>
      <Container danger={danger}>

        <h1>Título do Modal</h1>
        <p>
          Corpo do Modal
        </p>
        <Footer>

          <button type="button" className="cancel-button">
            Cancelar
          </button>
          <Button type="Button" danger={danger}>
            Deletar
          </Button>

        </Footer>

      </Container>
    </Overlay>,
    document.getElementById("modal-root"),
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};