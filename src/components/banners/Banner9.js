import styled from "styled-components";
import banner9 from "../../shared/banner9.png";

const Banner9 = () => {
    return (
            <Banner9Wrap style={{backgroundColor: "#d2edfa"}}>
                <section className="nearbystore-cover">
                    <div className="cover-content">
                        <h1 className="cover-title">
                            복비없이 투명한
                            <br />
                            부동산 직거래
                        </h1>
                        <span className="cover-desc">
                            이웃이 살던 집, 당근에서
                            <br />
                            편하게 직거래해보세요.
                        </span>
                        <div className="business-profile-button">
                            <a href="https://business.daangn.com/">매물 올리기</a>
                        </div>
                        <div className="nearbystore-cover-image">
                            <Image9 />
                        </div>
                    </div>
                    
                </section>
            </Banner9Wrap>
    );
};

export default Banner9;

const Banner9Wrap = styled.div`
    display: flex;
    .nearbystore-cover {
        display: block;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        padding: 0 16px 0 16px;
        height: 315px;
        @media screen and (max-width: 430px) {
            overflow-x: hidden;
        }
    }
    .cover-content {
        height: 315px;
        box-sizing: border-box;
        padding-top: 50px;
        width: 768px;
        margin: 0 auto;
 
    }
    .nearbystore-cover-image {
        display: flex;
        position: absolute;
        bottom: 0;
        right: 0;
        top: 55;
        left: 352px;
        width: 603px;
        height: 260px;
    }
    
    .cover-title {
        font-size: 2rem;
        line-height: 1.5;
        letter-spacing: -0.32px;
        margin-top: 0;
        margin-bottom: 0;
        font-weight: 700;
    }
    .cover-desc {
        line-height: 1.32;
        font-size: 18px;
        letter-spacing: -0.18px;
        margin-top: 16px;
        display: block;
        bottom: 0;
    }
    .business-profile-button {
        margin-top: 10px;
        display: flex;
        width: 180px;
        height: 56px;
        align-items: center;
        a {
            background: #FF6F0F;
            color: white;
            font-size: 0.875rem;
            font-weight: 700;
            padding: 5px 10px;
            line-height: 24px;
            border-radius: 0.25rem;
            text-align: center;
            align-item: center;
            display: flex;
            &:hover {
                background: #f06000;
            }
        }
    }
`

const Image9 = styled.div`
    background-image: url(${banner9});
    background-size: 485px 270px;
    width: 485px;
    height: 270px;
    margin: 0;
    padding: 0;
`
