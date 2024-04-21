import css from "./ImageCard.module.css";

const ImageCard = ({ urls, alt_description, openModal }) => {
  return (
    <div className={css.wrapper}>
      <img
        onClick={() =>
          openModal({ imgUrl: urls.regular, description: alt_description })
        }
        src={urls.small}
        alt={alt_description}
        className={css.image}
      />
    </div>
  );
};

export default ImageCard;
