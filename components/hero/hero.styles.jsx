import styled from "styled-components";
import { THEME } from "../../styles/theme/theme";

export const HeroDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding: 150px 20px 0;

    @media screen and (min-width: 768px){
      padding: 150px 100px;
    }

    p{
        color: ${THEME.colors.light3}
    }
`;


export const SubText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const MainText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    h1{
        margin-bottom: 30px;
    }
`;


export const Intro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 70px;

    ${SubText}{
        margin-bottom: 50px;
    }

    @media screen and (min-width: 768px){
      flex-direction: row;
      ${SubText}{
        margin-bottom: 0px;
      }
      
      ${MainText}{
        width: 60%;
      }
    }
`;


export const ImageDiv = styled.div`
    width: 100%;
`;

export const HeroSkew = styled.div`
    transform: skewY(-4deg);
    width: 100%;
    background-color: ${THEME.colors.dark2};

`

export const HeroImg = styled.img`
    width: 100%;
`;





