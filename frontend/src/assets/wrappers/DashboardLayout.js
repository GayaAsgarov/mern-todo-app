import styled from "styled-components";

const Wrapper = styled.div`
  main {
    display: grid;
    grid-template-columns: ${(props) =>
      props?.className?.includes("sidebar-open") ? "330px auto" : "0 auto"};
    transition: grid-template-columns 0.3s ease;
    .page {
      background: red;
      height: calc(100vh - 100px);
      overflow-y: auto;
      padding: 15px 15px 0 15px;
      background: #f8fafc;
      box-shadow: rgba(0, 0, 0, 0.2) 3px 3px 3px 3px;
    }
  }
`;

export default Wrapper;
