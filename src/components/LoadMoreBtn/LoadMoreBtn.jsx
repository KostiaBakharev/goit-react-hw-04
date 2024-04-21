import css from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ onAddPage }) => {
  return (
    <>
      <button className={css.loadMore} onClick={onAddPage}>
        Load more
      </button>
    </>
  );
};

export default LoadMoreBtn;
