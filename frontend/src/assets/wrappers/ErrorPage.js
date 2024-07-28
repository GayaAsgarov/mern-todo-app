import styled from "styled-components";

const Wrapper = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 200px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 25px;
    text-transform: capitalize;
    font-weight: 500;
    margin-bottom: 8px;
  }
  p {
    color: #64748b;
    font-size: 16px;
    margin-bottom: 15px;
  }
  a {
    color: #2cb1bc;
    text-decoration: none;
    text-transform: capitalize;
  }
`;

export default Wrapper;
