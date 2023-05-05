import styled from "styled-components";
import { THEME } from "../../styles/theme/theme";
import { PrimaryButton } from "../button/button.styles";


export const BannerSection = styled.div`
    background-color: ${THEME.colors.light1};
    width: 100%;
    padding: 100px 20px 0;
    transform: skewY(-10deg);
    position: relative;
    top: -140px;
    height: max-content;
    z-index: 1;
    /* border: 1px solid #000; */

    h1{
        color: #000;
    }


    
    @media screen and (min-width: 768px){
      padding: 100px 100px 0;

    }
`;

export const Stroke = styled.span`
    width: 65px;
    position: absolute;
    transition: all .5s ease-in-out;
    img{
        width: 100%;
    }
`;

export const TopStroke = styled(Stroke)`
    top: -40px;
    left: 30px;
`;

export const BottomStroke = styled(Stroke)`
    bottom: -40px;
    right: 30px;
`;

export const Banner = styled.div`
    background-color: ${THEME.colors.yellow};
    width: 100%;
    padding: 100px 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 5px;
    position: relative;
    transform: skewY(10deg);
    position: relative;
    top: -300px;
    margin-bottom: -300px;


    h2{
        margin-bottom: 30px;
        color: ${THEME.colors.dark1};
    }

    p{
        color: ${THEME.colors.dark1};

        font-size: ${THEME.font.text};
        margin-bottom: 10px;
    }

    ${PrimaryButton}{
        margin-top: 25px;
    }

    &:hover{
        ${Stroke}{
            width: 60px;
        }
    }


        
    @media screen and (min-width: 768px){
      padding: 100px 100px;

    }
`



export const FaqSection = styled.div`
    width: 100%;
    border: 1px solid ${THEME.colors.dark1};
    margin-top: 150px;
    margin-bottom: -50px;
    transform: skewY(10deg) ;
`