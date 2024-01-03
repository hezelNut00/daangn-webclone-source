import styled from "styled-components";

import Banner1 from "../components/banners/Banner1";
import Banner2 from "../components/banners/Banner2";
import Banner3 from "../components/banners/Banner3";
import Banner4 from "../components/banners/Banner4";
import Banner5 from "../components/banners/Banner5";

const MainPage = () => {
    return (
        <>
            <Main>
                <Banner1 />
                <Banner2 />
                <Banner3 />
                <Banner4 />
                <Banner5 />
            </Main>
        </>
    );
};

export default MainPage;

const Main = styled.div`
    padding-top: 64px;
    @media screen and (max-width: 430px) {
        width: 400vw;
    }
`