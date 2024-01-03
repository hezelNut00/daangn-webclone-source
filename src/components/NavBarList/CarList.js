import styled from "styled-components";
import CarItem from "./NavBarItems/CarItem";
import CarImage from "../icons/CarImage.png";

const sampleArticle2 = {
    name: "랜드로버 디스커버리 스포츠 L550 2.0 TD4 AWD HSE Luxury (180마력)",
    url: "/daangnmarket/jobs",
    urlToImage: "https://via.placeholder.com/108",
    modelYear: 14,
    carMileage: 55,
    region: "인사동",
    salary: "전세",
    price : "3200000"
};

const array_01 = [];
for (let i = 0; i < 10; i++) {
    array_01.push(<CarItem article={sampleArticle2}/>);
};
const array_02 = [];
for (let i = 0; i < 10; i++) {
    array_02.push(<CarItem article={sampleArticle2}/>);
};

const CarList = () => {
    
    return (
            <CarListWrap>
                <section className="nearbystore-article-list">
                    <h1 className="article-list-title">인기 중고차</h1>
                    <div className="cards-wrap">
                        {array_01}
                    </div>
                </section>
                <div className="business-profile-wrap">
                    <section className="business-profile-container">
                        <div className="business-profile-image_01"></div>
                        <div className="business-profile-desc">
                            <h6>
                                딜러 수수료 없는 중고차 직거래
                                <br />
                                당근 내 근처 탭에서 바로 찾아보세요!
                            </h6>
                        </div>
                        <div className="business-profile-button">
                            <a href="/daangnmarket">앱 다운로드 하기</a>
                        </div>
                    </section>
                </div>
                <div className="cards-wrap">
                        {array_02}
                </div>
                
            </CarListWrap>
    );
};

export default CarList;

const CarListWrap = styled.div`
    padding-bottom: 100px;
    margin-top: 64px;
    width: 757px;
    display: block;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
    .nearbystore-article-list {
        
    }
    .article-list-title {
        font-size: 1.625rem;
        line-height: 1,38;
        text-align: left;
        margin: 60px 0 40px;
        padding: 0;
        
    }
    .article-list-nav {
        display: flex;
        justify-content: center;
    }

    .cards-wrap {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 768px;
        & + & {
        }
    }
    .business-profile-wrap {
        margin-top: 44px;
        margin-bottom: 64px;
    }
    .business-profile-container {
        background-color: #009ceb1a;
        padding: 24px 22px 24px 32px;
        align-items: center;
        flex-direction: row;
        overflow: hidden;
        border-radius: 0.375rem;
        height: 72px;
        display: flex;
    }
    .business-profile-image_01 {
        background-image: url(${CarImage});
        background-size: 69px 56px;
        width: 69px;
        height: 56px;
    }
    .business-profile-desc {
        width: 435px;
        display: flex;
        padding-left: 32px;
        flex: 1;
        flex-direction: column;
        align-items: flex-start;
        h6 {
            line-height: 1.3;
            font-size: 1.25rem;
            font-weight: 700;
            margin: 0;
        }
        span {
            font-weight: 400;
            font-size: 1rem;
            margin-top: 2px;
            line-height: 1.35;
        }
    }
    .business-profile-button {
        display: flex;
        width: 180px;
        height: 56px;
        align-items: center;
        margin-left: 12px;
        a {
            background: #FF6F0F;
            color: white;
            font-size: 0.875rem;
            font-weight: 700;
            padding: 8px 16px;
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
