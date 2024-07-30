import styled from "styled-components";

const Wrapper = styled.aside`
  background: #fff;
  max-height: calc(100vh - 100px);
  overflow: hidden;
  width: 270px;
  transform: ${(props) =>
    !props?.className?.includes("show") && "translateX(-330px)"};
  padding: 32px 0 0 60px;
  transition: transform 0.3s ease;

  ul {
    li {
      a {
        margin-bottom: 24px;
        font-size: 24px;
        display: flex;
        align-items: center;
        text-decoration: none;
        gap: 16px;
        color: #64748b;
        transition: color 0.3s ease, padding-left 0.3s ease;

        p {
          font-size: 18px;
        }

        &:hover {
          color: #2cb1bc;
          padding-left: 20px;
        }
      }
    }
  }
`;

export default Wrapper;
