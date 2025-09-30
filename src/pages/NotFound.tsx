import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text center m-100">
      <h1 className="text-mint-500 text-3xl text-center">Page Not Found</h1>
      <Link
        to="/"
        className="text-blue-200 font-bold text-2xl mr-8"
      >
        <p className="text-center">Return to home</p>
      </Link>
    </div>
  );
};

export default NotFound;
