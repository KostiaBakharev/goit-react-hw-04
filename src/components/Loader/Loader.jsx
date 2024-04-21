import { RotatingLines } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="loader">
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="red"
        strokeWidth="3"
        animationDuration="1.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass="loader"
      />
    </div>
  );
};
export default Loader;
