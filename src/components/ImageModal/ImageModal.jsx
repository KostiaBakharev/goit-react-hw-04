import css from "./ImageModal.module.css";
import Modal from "react-modal";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
//   overlay: {
//     // backgroundColor: "#b3b3b3",
//     position: "fixed",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: "rgba(120, 120, 120, 0.75)",
//   },
// };

const ImageModal = ({ selectedImage, isOpen, onRequestClose }) => {
  return (
    <div>
      <Modal
        // style={customStyles}
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
