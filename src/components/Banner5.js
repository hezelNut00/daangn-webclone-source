import styled from "styled-components";

import banner5 from "../shared/banner5.webp";

const Banner5 = () => {
    return (
        <section className="rebranded-home-main-section" style={{backgroundColor: "#F6FDEC" }}>
            <HomeMainContent>
                <div>
                    <p className="service-title">동네업체</p>
                    <h1 className="home-main-title">
                        내 근처에서 찾는
                        <br />
                        동네업체
                    </h1>
                    <p className="service-desc">
                        이웃들의 추천 후기를 확인하고
                        <br />
                        동네 곳곳의 업체들을 찾을 수 있어요.
                    </p>
                    <div className="home-buttons">
                        <a href="/daangnmarket" className="home-buttons-town">당근 동네업체 보기</a>
                    </div>
                </div>
                <div className="home-main-image-01">
                    <Image5 />
                </div>
            </HomeMainContent>
        </section>
    );
};

export default Banner5;

const HomeMainContent = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 1024px;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 430px) {
        overflow-x: hidden;
    }
    .home-main-image-01 {
        display: inline-block;
        background-size: 655px 750px;
    }
    .service-title {
        font-weight: 700;
        font-size: 18px;
        color: #FF6F0F;
        margin-bottom: 10px;
        margin-top: 0;
        p {
            dispaly: block;
        }
    }
    .home-main-title {
        font-size: 42px;
        line-height: 57px;
        margin-bottom: 10px;
        margin-top: 0;
    }
    .service-desc {
        font-weight: 400;
        font-size: 20px;
        color: #7c7c7c;
        line-height: 30px;
        margin: 0;
    }
    .home-buttons {
        margin-top: 32px;
        display: flex;
    }
    a {
        font-size: 18px;
        font-weight: 700;
        line-height: 23.75px;
        background-color: #E9ECEF;
        border-radius: 6px;
        padding: 12px 20px;
        margin-right: 10px;
        text-align: center;
        align-item: center;
        height: 23.758px;
        &:hover {
            background-color: #dee2e6
        }
    }
`

const Image5 = styled.div`
    background-image: url(${banner5});
    background-size: 655px 750px;
    width: 655px;
    height: 750px;
    margin: 0;
    padding: 0;
`