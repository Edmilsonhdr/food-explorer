import styled from "styled-components";

export const Container = styled.header`
    width: 100vw;
    height: 104px;
    display: flex;
    background-color:linear-gradient(180deg, #091E26 0%, #00131C 100%);
    align-items: center;
    justify-content: space-evenly;
    /* background: ${({ theme }) => theme.GRADIENTS_200}; */

    img{
        width: 197px;
        height: 30px;
    }
`;