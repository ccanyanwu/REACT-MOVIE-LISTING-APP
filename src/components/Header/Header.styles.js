import styled from "styled-components";

export const Wrapper = styled.div`
    background: var(--darkGrey);
    padding: 0 20px;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;
`;

export const LogoImg = styled.img`
    width: 200px;
    @media screen and (max-width: 500px){
        width: 150px;
    }
`;

export const TMDBLogoImg = styled.img`
    width: 100px;
    margin-left: auto;

    @media screen and (max-width:500px){
        width: 80px;
    }
`;

