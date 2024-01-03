import styled from "styled-components";
import HotArticleItem from "../hotArticles/hotArticlesItems/HotArticleItem";
import HotArticleNav from "./HotArticleNav";
// import macproImage from "./../../shared/macpro.png";

// const sampleArticle1 = {
//     title: "맥북프로 써보고싶어요",
//     price: 1800000,
//     adress: "서울 성동구 성수1동",
//     url: "/daangnmarket/hot_article",
//     urlToImage: macproImage,
//     interest: 0,
//     chat: 0,
// };

const sampleArticle2 = {
    title: "제목",
    price: 1000,
    adress: "서울 성동구 성수1동",
    url: "/daangnmarket/hot_article",
    urlToImage: "https://via.placeholder.com/223",
    interest: 130,
    chat: 22,
};

const array = [];
for (let i = 0; i < 57; i++) {
    array.push(<HotArticleItem article={sampleArticle2}/>);
};

const HotArticleList = () => {
    
    return (
            <HotArticleListWrap>
                <section className="hotarticle-article-list">
                    <h1 className="article-list-title">중고거래 인기 매물</h1>
                    <HotArticleNav />
                    <div className="cards-wrap">
                        {/* <HotArticleItem article={sampleArticle1} /> */}
                        {array}
                    </div>
                </section>
            </HotArticleListWrap>
    );
};

export default HotArticleList;

const HotArticleListWrap = styled.div`
    margin-top: 64px;
    width: 980px;
    display: block;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
    .hotarticle-article-list {
        padding-top: 50px;
        
    }
    .article-list-title {
        font-size: 32px;
        line-height: 43.2px;
        text-align: center;
        margin: 0;
        padding: 0;
        margin-bottom: 40px;
    }
    .cards-wrap {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 40px;
    }
    

`

