import errorImg from "../assets/error.jpg";
import { useRouteError } from "react-router-dom";
import Header from "../components/Header"

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
    <Header/>
    <div className="error">
    <img src={errorImg} className="err-img" />
      <p></p>
      <p>
      This is a 404 page {error.statusText} and we think it's fairly clear You aren't going to
      find what you're looking for here But we know you're hungry, so don't
      fret or rage Hit that big red button to go back to our homepage.{" "}
      </p>
      </div>
      </>
  );
};
export default Error;
