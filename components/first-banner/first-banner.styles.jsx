import styled from "styled-components";
import { THEME } from "../../styles/theme/theme";
import { SecondaryButton } from "../button/button.styles";

export const BannerSection = styled.div`
    background-color: ${THEME.colors.dark2};
    width: 100%;
    padding: 100px 20px;

    
    @media screen and (min-width: 768px){
      padding: 100px 100px;

    }
`;

export const Banner = styled.div`
    background-color: ${THEME.colors.blue};
    width: 100%;
    padding: 100px 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 5px;
    position: relative;

    h2{
        margin-bottom: 30px;
    }

    p{
        color: ${THEME.colors.light1};
        font-size: ${THEME.font.text};
        margin-bottom: 10px;
    }

    ${SecondaryButton}{
        margin-top: 15px;
    }


        
    @media screen and (min-width: 768px){
      padding: 100px 100px;

    }
`

export const Stroke = styled.span`
    width: 75px;
    position: absolute;
    img{
        width: 100%;
    }
`;

export const TopStroke = styled(Stroke)`
    top: -40px;
    left: 50px;
`;

export const BottomStroke = styled(Stroke)`
    bottom: -40px;
    right: 50px;
`
