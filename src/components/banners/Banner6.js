import styled from "styled-components";
import banner6 from "../../shared/banner6.webp";

const Banner6 = () => {
    return (
            <Banner6Wrap style={{backgroundColor: "#FFF1AA"}}>
                <section className="fleamarket-cover">
                    <div className="cover-content">
                        <h1 className="cover-title">
                            믿을만한
                            <br />
                            이웃 간 중고거래
                        </h1>
                        <span className="cover-desc">
                            동네 주민들과 가갑고 따뜻한 거래를
                            <br />
                            지금 경험해보세요.
                        </span>
                        <div className="fleamarket-cover-image">
                            <Image6 />
                        </div>
                    </div>
                    
                </section>
            </Banner6Wrap>
    );
};

export default Banner6;

const Banner6Wrap = styled.div`
    display: flex;
    .fleamarket-cover {
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
    .fleamarket-cover-image {
        display: flex;
        position: absolute;
        bottom: 0;
        right: 0;
        top: 0;
        left: 352px;
        height: 315px;
        width: 416px;
    }
    
    .cover-title {
        font-size: 34px;
        line-height: 1.5;
        letter-spacing: -0.32px;
        margin-top: 0;
        font-weight: 700;
    }
    .cover-desc {
        line-height: 1.32;
        font-size: 18px;
        letter-spacing: -0.18px;
        margin-top: 16px;
        display: block;
        margin: 0;
    }
`

const Image6 = styled.div`
    background-image: url(${banner6});
    background-size: 416px 315px;
    width: 416px;
    height: 315px;
    margin: 0;
    padding: 0;
`
