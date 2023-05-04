import styled from "styled-components";
import { THEME } from "../../styles/theme/theme";

export const TestimonialContainer = styled.div`
    width: 100%;
    padding: 100px 20px;
    background-color: ${THEME.colors.dark2};

        
    @media screen and (min-width: 768px){
      padding: 100px 100px;

    }

`;

export const Testimony = styled.p`
    font-size: ${THEME.font.text};
    color: ${THEME.colors.light1};
`

export const TestinialDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 50px;
    gap: 30px;
    border: 2px dashed ${THEME.colors.light3};
    border-radius: 5px;
    margin-bottom: 400px;

    img {
        width: 150px;
    }

            
    @media screen and (min-width: 768px){
      padding: 100px;
      flex-direction: row;
      align-items: center;

    }

`;

export const Name = styled.p`
    color: ${THEME.colors.light3};
    font-size: ${THEME.font.text};
    font-weight: bold;
    margin-top: 12px;
`