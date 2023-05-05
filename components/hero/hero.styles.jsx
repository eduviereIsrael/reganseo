import styled from "styled-components";
import { THEME } from "../../styles/theme/theme";

export const HeroDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;

    p{
        color: ${THEME.colors.light3};
        font-size: ${THEME.font.text};

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
    margin-bottom: 140px;
    padding: 100px 20px 0;


    ${SubText}{
        margin-bottom: 50px;
    }

    @media screen and (min-width: 768px){
      flex-direction: row;
      padding: 100px 100px 0;

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
    transform: skewY(10deg) translateY(-150px);
    position: relative;
    @media screen and (min-width: 768px){
    transform: skewY(10deg) translateY(-150px);

    }

`;

export const HeroSkew = styled.div`
    transform: skewY(-10deg);
    width: 100%;
    background-color: ${THEME.colors.dark2};
    padding: 150px 20px;
    @media screen and (min-width: 768px){
      padding: 150px 100px 300px;
    }


`

export const HeroImg = styled.img`
    width: 100%;
`;





