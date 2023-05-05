import styled from "styled-components";
import { THEME } from "../../styles/theme/theme";

export const FooterContainer = styled.div`
    width: 100%;
    background-color: ${THEME.colors.light1};
    padding: 0 20px 100px;
    z-index: 2;

    h1{
        color: ${THEME.colors.dark1};
    }

    p{
        color: ${THEME.colors.dark1};
        font-size: ${THEME.font.text};
    }
            
    @media screen and (min-width: 768px){
      padding: 0px 100px 100px;

    }

`;

export const FooterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const FooterIntro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const ContactDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

                
    @media screen and (min-width: 768px){
      flex-direction: row;
      justify-content: space-between;

    }
`

export const FooterForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 40px;

    input, textarea{
        width: 100%;
        padding: 12px;
        border: 1px solid ${THEME.colors.light2};
        margin-bottom: 10px;
        background-color: ${THEME.colors.light1};
        border-radius: 5px;

        font-size: ${THEME.font.text};
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color:${THEME.colors.dark1} ;
    }

    @media screen and (min-width: 768px){
        width: 50%;
    }
`;

export const ButtonDiv = styled.div`
    position : relative;
    width: 160px;
    height: 160px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 30px;
`;

export const OuterButtonBorder = styled.div`
    height: 160px;
    width: 160px;
    /* background-color: red; */
    border-radius: 50%;
    border: 2px dashed ${THEME.colors.light3};
    position: absolute;
    opacity: ${({sending}) => !sending? '0' : '1'};
    transition: transform 800s ease;

    /* transition: opacity .5s ease; */
    z-index: 3;

    &:hover {
        /* opacity: 1; */
        cursor: pointer;
        /* transition: opacity .5s ease; */

    }
    transform: ${({sending}) => !sending? '' : 'rotate(36000deg)'};

    /* transform: rotate(3600deg); */

    &:focus{
        outline: none;
        background: none;

    }

`

export const Button = styled.div`
    height: 151px;
    width: 151px;
    background-color: ${THEME.colors.dark1};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 4.5px;
    top: 4.5px;
    z-index: 2;
`

