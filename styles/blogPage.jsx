import styled from "styled-components";
import { THEME } from "./theme/theme";

const { dark1, light1 } = THEME.colors

const { heading3, heading4 } = THEME.font

export const BlogPageDiv = styled.div`
    padding: 100px 20px 0px ;
    background-color: ${light1};

    h2{
        font-size: ${heading3};
        margin-top: 40px;
        margin-bottom: 20px;
    }

    h3{
        font-size: ${heading4};
        line-height: 150%;
        font-family: calibri;
        margin-top: 40px;
        margin-bottom: 20px;
    }

    p{
        font-size: 20px;
        line-height: 150%;
        /* letter-spacing: 10px; */
        word-spacing: 5px;

        margin-bottom: 15px;
    }

    @media screen and (min-width: 768px){
      padding: 100px 100px 0px ;
    }
`;

export const BlogIntro = styled.div`
    *{
        color: ${dark1}
    }
    
    h1{
        width: 100%;
        font-size: 67px;
        padding-top: 40px;
        padding-bottom: 20px;
    }

    .description{
        width: 100%;
    }

    .cover-image {
        width: 100%;
        margin-top: 70px;
    }

    margin-bottom: 120px;

    @media screen and (min-width: 768px){
      h1 {
        width: 70%;
      }

      .description{
        width: 70%;
    }
    }
`;

export const BlogBody = styled.div`
    *{
        color: ${dark1}
    }
    width: 100%;

    @media screen and (min-width: 768px){
      width: 70%;
    }
    margin-bottom: 150px;
`;