import styled from "styled-components";
import Link from "next/link";
import { THEME } from "../../styles/theme/theme"

const BaseButton = styled(Link)`
    font-size: ${THEME.font.link};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 120px;
    text-decoration: none;
    border-radius: 3px;
    transition: all .3s ease;
`;

export const PrimaryButton = styled(BaseButton)`
    color: ${THEME.colors.light1};
    background-color: ${THEME.colors.blue};

    &:hover{
        transform: translateY(-4px);

    }
`;

export const SecondaryButton = styled(BaseButton)`
    color: ${THEME.colors.dark1};
    background-color: ${THEME.colors.yellow};
`;