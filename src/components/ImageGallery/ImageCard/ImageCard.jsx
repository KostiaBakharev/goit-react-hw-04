import css from "./ImageCard.module.css";

const ImageCard = ({ urls, alt_description }) => {
  // console.log(urls.small);
  return (
    <div className={css.wrapper}>
      <img src={urls.small} alt={alt_description} className={css.image} />
    </div>
  );
};

export default ImageCard;
// 2
// import css from "./ImageCard.module.css";
// const ImageCard = ({ urls, alt_description }) => {
//   console.log(urls.small);
//   // console.log(alt_description);
//   return (
//     <div className={css.wrapper}>
//       <img
//         src={
//           "https://images.unsplash.com/photo-1713464238868-666e916225af?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w1OTI2ODV8MHwxfGFsbHwzfHx8fHx8Mnx8MTcxMzU1ODU5MHw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400"
//         }
//         alt={alt_description}
//         className={css.image}
//       />
//     </div>
//   );
// };

// export default ImageCard;

// 3

// import css from "./ImageCard.module.css";

// const ImageCard = ({ urls, alt_description, openModal }) => {
//   console.log(urls);
//   return (
//     <div>
//       <img
//         className={css.image}
//         // onClick={() =>
//         //   openModal({ imgUrl: urls.regular, description: alt_description })
//         // }
//         src={urls.small}
//         alt={alt_description}
//       />
//     </div>
//   );
// };

// export default ImageCard;
