import styled from "styled-components";
import banner7 from "../../shared/banner7.png";

const Banner7 = () => {
    return (
            <Banner7Wrap style={{backgroundColor: "#f7f1eb"}}>
                <section className="nearbystore-cover">
                    <div className="cover-content">
                        <h1 className="cover-title">
                            동네 이웃들이
                            <br />
                            자주 가는 동네 업체
                        </h1>
                        <span className="cover-desc">
                            우리 동네 사람들이
                            <br />
                            이용하는 업체를 찾아보세요.
                        </span>
                        <div className="nearbystore-cover-image">
                            <Image7 />
                        </div>
                    </div>
                    
                </section>
            </Banner7Wrap>
    );
};

export default Banner7;

const Banner7Wrap = styled.div`
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
        width: 453px;
        height: 260px;
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
        bottom: 0;
    }
`

const Image7 = styled.div`
    background-image: url(${banner7});
    background-size: 453px 260px;
    width: 453px;
    height: 260px;
    margin: 0;
    padding: 0;
`
