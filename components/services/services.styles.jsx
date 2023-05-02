import styled from "styled-components";
import { THEME } from "../../styles/theme/theme";


export const ServicesDetailsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;

    h2{
        margin-bottom: 10px;
    }
`;

export const ServicesContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top: 1px solid ${THEME.colors.light2};
  padding: 20px 0;

`;

export const ServicesHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-bottom: 20px;
    width: 100%;

    p{
        transition: all .3s ease;
    }

    &:hover{
        cursor: pointer;
    }
`;


export const ServicesDiv = styled.div`
    width: 100%;
    margin-top: 200px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 200px;
`;

export const ImageContainer = styled.div`
    width: 35%;
    img{
        width: 100%;
    }
`;