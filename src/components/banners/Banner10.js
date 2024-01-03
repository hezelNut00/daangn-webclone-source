import styled from "styled-components";
import banner10 from "../../shared/banner10.png";

const Banner10 = () => {
    return (
            <Banner10Wrap style={{backgroundColor: "#d2edfa"}}>
                <section className="nearbystore-cover">
                    <div className="cover-content">
                        <h1 className="cover-title">
                            딜러 수수료 없는
                            <br />
                            중고차 직거래
                        </h1>
                        <span className="cover-desc">
                            딜러 없이 믿고 살 수 있는 중고차,
                            <br />
                            당근에서 직거래해보세요.
                        </span>
                        <div className="business-profile-button">
                            <a href="https://business.daangn.com/">내 차 판매하기</a>
                        </div>
                        <div className="nearbystore-cover-image">
                            <Image10 />
                        </div>
                    </div>
                    
                </section>
            </Banner10Wrap>
    );
};

export default Banner10;

const Banner10Wrap = styled.div`
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
        bottom: 30px;
        right: 0;
        left: 400px;
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

const Image10 = styled.div`
    background-image: url(${banner10});
    background-size: 400px 282px;
    width: 400px;
    height: 282px;
    margin: 0;
    padding: 0;
`
