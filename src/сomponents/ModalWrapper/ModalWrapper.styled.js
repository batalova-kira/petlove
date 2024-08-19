import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export const StyledModal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${(p) => p.theme.colors.modalGrey};
    /* box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25); */
    &:hover {
        cursor: pointer;
    }

    .modal {
        padding: ${(props) => props.modalPadding || "40px 28px"};
        max-width: ${(props) => props.modalWidth || "335px"};
        width: 100%;
        background-color: ${(p) => p.theme.colors.secondBackground};
        border-radius: 30px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &:hover {
            cursor: auto;
        }

        @media (mіn-width: 768px) {
            padding: ${(props) => props.mediumModalPadding || "40px 72px"};
            max-width: ${(props) => props.mediumModalWidth || "473px"};
        }
    }
`;

export const BtnClose = styled(IoClose)`
    fill: ${(p) => p.theme.colors.black};

    position: absolute;
    top: 20px;
    right: 20px;

    font-size: 24px;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all var(--primary-transition);

    &:hover {
        /* transform: rotate(90deg); */
        fill: ${(p) => p.theme.colors.yellow};
    }
`;

export const TitleModal = styled.h2`
    font-weight: 500;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    text-align: start;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.black};
`;
