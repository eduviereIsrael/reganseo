import styled from "styled-components";
import { THEME } from "../../styles/theme/theme";

export const ProblemsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    justify-content: space-between;


    @media screen and (min-width: 768px){
        flex-direction: row;
        justify-content: space-between;
    }
`;
// @media screen and (min-width: 768px){
//     transform: skewY(10deg) translateY(-300px);

//     }

export const ProblemsIntro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    h2{
        margin-bottom: 12px;
    }

    @media screen and (min-width: 768px){
        width: 37%;
    }
`;

export const ProblemsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;

    @media screen and (min-width: 768px){
        width: 50%;
    }
`