import ImageCard from "./ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.list}>
      {images.map(({ id, alt_description, urls }) => (
        <li key={id} className={css.item}>
          <ImageCard key={id} urls={urls} alt_description={alt_description} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;

// import ImageCard from "./ImageCard/ImageCard";
// import css from "./ImageGallery.module.css";

// const ImageGallery = ({ images }) => {
//   return (
//     <>
//       <ul className={css.list}>
//         {Array.isArray(images) &&
//           images.map(({ id, alt_description, urls }) => (
//             <ImageCard key={id} urls={urls} alt_description={alt_description} />
//           ))}
//       </ul>
//     </>
//   );
// };

// export default ImageGallery;
