import styled from "styled-components";
import { THEME } from "../../styles/theme/theme";

export const ProblemsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    justify-content: space-between;
    margin-top: 200px;
    padding: 0 20px;


    @media screen and (min-width: 768px){
        flex-direction: row;
        justify-content: space-between;
        padding: 0 100px;
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
    margin-bottom: 50px;

    h2{
        margin-bottom: 12px;
        text-transform: uppercase;
    }

    p{
        font-size: ${THEME.font.text};
    }

    @media screen and (min-width: 768px){
        width: 37%;
        margin-bottom: 0;
    }
`;

export const ProblemsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    gap: 30px;

    @media screen and (min-width: 768px){
        width: 50%;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`