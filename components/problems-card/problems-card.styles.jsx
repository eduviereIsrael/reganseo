import styled from "styled-components";
import { THEME } from "../../styles/theme/theme";

export const ProblemsCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    border: 1px solid ${THEME.colors.light2};
    padding: 40px;
    width: 100%;
    border-radius: 5px;

    p {
        font-size: ${THEME.font.text};
    }

`;

export const Index = styled.span`
    height: 29px;
    width: 29px;
    background-color: ${THEME.colors.light1};
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    color: #000;
    left: 0;
    top: 0;
`;

export const ProblemTitle = styled.p`
  text-transform: uppercase;  
  color: ${THEME.colors.light1};
  margin-bottom: 12px;
`;