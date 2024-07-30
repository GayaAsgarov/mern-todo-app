import styled from "styled-components";

const Wrapper = styled.header`
    background: #FFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 60px;
    .header-left {
        display: flex;
        align-items: center;
        gap: 60px;
        button {
            border: none;
            background: transparent;
            font-size: 25px;
            display: grid;
            place-items: center;
            color: #2CB1BC;
            cursor: pointer;
        }
        a {
            text-decoration: none;
            h1 {
                font-size: 40px;
                font-weight: bolder;
                color: #2CB1BC;
                margin-bottom: 0;
            }
        }
    }
`;

export default Wrapper;