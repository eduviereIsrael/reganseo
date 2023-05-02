import styled from "styled-components";
import { THEME } from "../../styles/theme/theme";

export const PerksCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 70px;

    p{
        font-size: ${THEME.font.text};
    }

    img{
        width: 45px;
        margin-bottom: 20px;
    }

    h4{
        margin-bottom: 5px;
    }
    
    @media screen and (min-width: 768px){
        width: 23%;
        margin-bottom: 0;
      
    }
`