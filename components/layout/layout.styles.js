import styled from "styled-components";
import { THEME } from "../../styles/theme/theme";

export const LayoutContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 1800px;

    @media screen and (min-width: 1800px){
      margin: 100px auto;

      border: 1px solid ${THEME.colors.light3};
      /* border-right: 1px solid ${THEME.colors.light3}; */
    }
`;