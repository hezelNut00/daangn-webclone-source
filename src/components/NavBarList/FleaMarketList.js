import styled from "styled-components";
import FleaMarketItem from "./NavBarItems/FleaMarketItem";
import macproImage from "./../../shared/macpro.png";

const sampleArticle1 = {
    title: "맥북프로 써보고싶어요",
    price: 1800000,
    adress: "서울 성동구 성수1동",
    url: "/daangnmarket/fleamarket",
    urlToImage: macproImage,
    interest: 0,
    chat: 0,
};

const sampleArticle2 = {
    title: "제목",
    price: 1000,
    adress: "서울 성동구 성수1동",
    url: "/daangnmarket/fleamarket",
    urlToImage: "https://via.placeholder.com/223",
    interest: 130,
    chat: 22,
};

const array = [];
for (let i = 0; i < 11; i++) {
    array.push(<FleaMarketItem article={sampleArticle2}/>);
};

const FleaMarketList = () => {
    
    return (
            <FleaMarketListWrap basename={process.env.PUBLIC_URL}>
                <section className="fleamarket-article-list">
                    <h1 className="article-list-title">중고거래 인기 매물</h1>
                    <div className="cards-wrap">
                        <FleaMarketItem article={sampleArticle1} />
                        {array}
                    </div>
                    <div className="article-list-more">
                        <a id="hot-articles-more" href="/daangnmarket/#/hot_articles" onClick={() => {
                            window.scrollTo({
                                    top: 0,
                                });
                        }}>인기매물 더 보기</a>
                    </div>
                </section>
            </FleaMarketListWrap>
    );
};

export default FleaMarketList;

const FleaMarketListWrap = styled.div`
    margin-top: 64px;
    width: 757px;
    display: block;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
    .fleamarket-article-list {
        padding-top: 50px;
        
    }
    .article-list-title {
        font-size: 32px;
        line-height: 43.2px;
        text-align: center;
        margin: 0;
        padding: 0;
        
    }
    .cards-wrap {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 40px;
    }
    .article-list-more {
        padding-top: 32px;
        padding-bottom: 60px;
        text-align: center;
        #hot-articles-more {
            text-decoration: underline;
            cursor: pointer;
            font-size: 1rem !important;
            line-height: 1.5;
            letter-spacing: -0.3px;
            color: #212529;
            font-weight: bold;
        }
    }

`

