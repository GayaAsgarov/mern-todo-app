import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <h1>404</h1>
        <h3>ohh! page not found!</h3>
        <p>we can&rsquo;t seem to find the page you are looking for</p>
        <Link to="/">back home</Link>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h3>something went wrong</h3>
    </Wrapper>
  );
};

export default Error;
