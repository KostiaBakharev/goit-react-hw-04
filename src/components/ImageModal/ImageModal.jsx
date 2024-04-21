import css from "./ImageModal.module.css";
import Modal from "react-modal";

const ImageModal = ({ selectedImage, isOpen, onRequestClose }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        {selectedImage && (
          <img
            className={css.modalImg}
            src={selectedImage.imgUrl}
            alt="Selected Image"
            width={800}
            height={600}
          />
        )}
      </Modal>
    </div>
  );
};

export default ImageModal;
