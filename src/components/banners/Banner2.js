import styled from "styled-components";

import banner2 from "../../shared/banner2.png";

const Banner2 = () => {
    return (
        <section className="rebranded-home-main-section" style={{backgroundColor: "#f9f9f9" }}>
            <HomeMainContent>
                <div className="home-main-image-01">
                    <Image2 />
                </div>
                <div>
                    <p className="service-title">중고거래</p>
                    <h1 className="home-main-title">
                        믿을만한
                        <br />
                        이웃 간 중고거래
                    </h1>
                    <p className="service-desc">
                        동네 주민들과 가깝고 따뜻한 거래를
                        <br />
                        지금 경험해보세요.
                    </p>
                    <div className="home-buttons">
                        <a href="/daangnmarket/#/hot_articles" className="home-buttons-hot-articles" onClick={() => {
                            window.scrollTo({
                                    top: 0,
                                });
                        }}>인기매물 보기</a>
                        <a href="/daangnmarket" className="home-buttons-trust">믿을 수 있는 중고거래</a>
                    </div>
                </div>
            </HomeMainContent>
        </section>
    );
};

export default Banner2;

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

const Image2 = styled.div`
    background-image: url(${banner2});
    background-size: 655px 750px;
    width: 655px;
    height: 750px;
    margin: 0;
    padding: 0;
`