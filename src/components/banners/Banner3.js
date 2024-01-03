import styled from "styled-components";

import banner3 from "../../shared/banner3.png";
import HomeIcon01 from "../icons/HomeIcon01";
import HomeIcon02 from "../icons/HomeIcon02";
import HomeIcon03 from "../icons/HomeIcon03";

const Banner3 = () => {
    return (
        <section className="rebranded-home-main-section" style={{backgroundColor: "#FFF8F1" }}>
            <HomeMainContent>
                <div>
                    <p className="service-title">동네생활</p>
                    <h1 className="home-main-title">
                        이웃만 아는
                        <br /> 
                        동네 정보와 이야기
                    </h1>
                    <p className="service-desc">
                        우리동네의 다양한 정보와 이야기를
                        <br />
                        공감과 댓글로 나누어요.
                    </p>
                    <ul className="home-story-list">
                        <li className="home-story-list-item">
                            <div className="icon-story icon-story-01"><HomeIcon01 /></div>
                            <div className="text-s">동네모임</div>
                            <div className="item-desc">
                                근처 이웃들과 동네
                                <br />
                                이야기를 해보세요.
                            </div>
                        </li>
                        <li className="home-story-list-item">
                            <div className="icon-story icon-story-02"><HomeIcon02 /></div>
                            <div className="text-s">동네질문</div>
                            <div className="item-desc">
                                궁금한 게 있을 땐
                                <br />
                                이웃에 물어보세요.
                            </div>
                        </li>
                        <li className="home-story-list-item">
                            <div className="icon-story icon-story-03"><HomeIcon03 /></div>
                            <div className="text-s">동네분실센터</div>
                            <div className="item-desc">
                                무언가를 잃어버렸다면
                                <br />
                                글을 올려보세요.
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="home-main-image-01">
                    <Image3 />
                </div>
            </HomeMainContent>
        </section>
    );
};

export default Banner3;

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
    .item-desc {
        font-size: 13px;
        font-weight: 400;
        color: #7c7c7c;
        line-height: 17px;
    }
    .home-story-list {
        display: flex;
        margin-top: 40px
    }
    .icon-story{
        width: 124px;
        margin-top: 16px;
        margin-bottom: 16px;
        margin-right: 10px;
        margin-left: 0
    }
    ul li {
        margin-top: 1.6rem;
        margin-bottom: 1.6rem;
        margin-right: 10px;
        margin-left: 0;
        width: 124px;
    }
    .icon-story-01 {
        //background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/main/rebranded-icon-story-1-f7be38c51a389f415e9c0ae94294a80d10a744c3006a2e3a5978c11f8fc8d5d5.svg);
        width: 48px;
        height: 48px;
        
    }
    .icon-story-02 {
        //background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/main/rebranded-icon-story-2-5611a1d6fccb1e6b28adac130948d9701358f94fe7eb31daa224493bbd875c36.svg);
        width: 48px;
        height: 48px;
    }
    .icon-story-03 {
        //background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/main/rebranded-icon-story-3-5a01573654c91fafeb8253238bac8a718edb7fdf3e49ce8b1a7b89c4aebc6f61.svg);
        width: 48px;
        height: 48px;
    }
`

const Image3 = styled.div`
    background-image: url(${banner3});
    background-size: 655px 750px;
    width: 655px;
    height: 750px;
    margin: 0;
    padding: 0;
`