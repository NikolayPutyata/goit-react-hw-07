import { Circles } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loaderDiv}>
      <Circles height="80" width="80" color="#3498db" ariaLabel="loading" />
    </div>
  );
};

export default Loader;
