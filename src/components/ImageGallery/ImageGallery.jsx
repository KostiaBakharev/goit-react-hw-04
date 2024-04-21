import ImageCard from "./ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  // console.log("ImageGallery rendering with new images:", images);
  return (
    <ul className={css.list}>
      {Array.isArray(images) &&
        images.map(({ id, alt_description, urls }) => (
          <li key={id} className={css.item}>
            <ImageCard
              key={id}
              urls={urls}
              alt_description={alt_description}
              openModal={openModal}
            />
          </li>
        ))}
    </ul>
  );
};
export default ImageGallery;
