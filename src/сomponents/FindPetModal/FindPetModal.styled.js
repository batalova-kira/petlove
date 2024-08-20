import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints.js";

export const WrapperFindPetImg = styled.div`
    position: relative;
    margin-bottom: 16px;

    border-radius: 100px;
    width: 120px;
    height: 120px;
    overflow: hidden;
    background-position: center;
    background-repeat: no-repeat;

    @media only screen and (min-width: ${breakpoints.medium}) {
        width: 150px;
        height: 150px;
    }
`;

export const FindPetImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

export const FindPetCategory = styled.div`
    position: absolute;
    top: 40px;
    left: 110px;

    padding: 8px 14px;
    border-radius: 30px;

    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.yellow};
    background: ${(props) => props.theme.colors.lightYellow};

    &::first-letter {
        text-transform: uppercase;
    }
`;

export const FindPetTitle = styled.p`
    font-weight: 700;
    margin-bottom: 10px;

    font-size: 18px;
    line-height: 1.33;
    color: ${(props) => props.theme.colors.secondaryBlack};
`;

export const WrapperRating = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    margin-bottom: 20px;

    @media only screen and (min-width: ${breakpoints.medium}) {
        /* width: 150px;
        height: 150px; */
    }
`;

export const RatingNumber = styled.p`
    font-size: 14px;

    line-height: 1.43;
    color: ${(props) => props.theme.colors.secondaryBlack};

    @media only screen and (min-width: ${breakpoints.medium}) {
        /* width: 150px;
        height: 150px; */
    }
`;

export const ContainerPetInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 27px;
    margin-bottom: 18px;

    @media only screen and (min-width: ${breakpoints.medium}) {
        /* width: 150px;
        height: 150px; */
    }
`;
export const WrapperPetInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    @media only screen and (min-width: ${breakpoints.medium}) {
        /* width: 150px;
        height: 150px; */
    }
`;

export const PetInfoTitle = styled.p`
    font-size: 10px;

    line-height: 1.4;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.lightGrey};

    @media only screen and (min-width: ${breakpoints.medium}) {
        /* width: 150px;
        height: 150px; */
    }
`;

export const PetInfoTitleDesc = styled.p`
    font-size: 12px;

    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.black};

    @media only screen and (min-width: ${breakpoints.medium}) {
        /* width: 150px;
        height: 150px; */
    }
`;

export const PetInfoText = styled.p`
    margin-bottom: 40px;
    font-size: 14px;

    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.secondaryBlack};

    @media only screen and (min-width: ${breakpoints.medium}) {
        /* width: 150px;
        height: 150px; */
    }
`;
