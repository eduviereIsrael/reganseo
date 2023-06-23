import styled from "styled-components";
import { THEME } from "../../styles/theme/theme";

export const NavbarDiv = styled.div`
    width: 100%;
    padding: 0px 20px;
    background-color: ${THEME.colors.dark1};

    @media screen and (min-width: 768px){
      padding: 0px 100px;
    }

`;

export const NavbarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid ${THEME.colors.light3};
`;

export const LogoDiv = styled.div`
  img{
    width: 45px;
  }
`;