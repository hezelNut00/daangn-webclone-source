import styled from "styled-components";
import JobsItem from "./NavBarItems/JobsItem";
import JobsImage_01 from "../icons/JobsImage_01.png";
import JobsImage_02 from "../icons/JobsImage_02.png";

const sampleArticle2 = {
    name: "제목",
    url: "/daangnmarket/jobs",
    urlToImage: "https://via.placeholder.com/108",
    company: "회사",
    region: "주소",
    salary: "월급",
    price : "7500000"
};

const array_01 = [];
for (let i = 0; i < 10; i++) {
    array_01.push(<JobsItem article={sampleArticle2}/>);
};
const array_02 = [];
for (let i = 0; i < 10; i++) {
    array_02.push(<JobsItem article={sampleArticle2}/>);
};

const JobsList = () => {
    
    return (
            <JobsListWrap>
                <section className="nearbystore-article-list">
                    <h1 className="article-list-title">인기 당근알바</h1>
                    <div className="cards-wrap">
                        {array_01}
                    </div>
                </section>
                <div className="business-profile-wrap">
                    <section className="business-profile-container_01">
                        <div className="business-profile-image_01"></div>
                        <div className="business-profile-desc">
                            <h6>업체를 운영하고 계신가요?</h6>
                            <span>당근에 등록하고 이웃에게 알려보세요!</span>
                        </div>
                        <div className="business-profile-button">
                            <a href="https://www.daangn.com/kr/jobs/about/">이용방법 알아보기</a>
                        </div>
                    </section>
                </div>
                <div className="cards-wrap">
                        {array_02}
                </div>
                <div className="business-profile-wrap">
                    <section className="business-profile-container_02">
                        <div className="business-profile-image_02"></div>
                        <div className="business-profile-desc">
                            <h6>업체를 운영하고 계신가요?</h6>
                            <span>당근에 등록하고 이웃에게 알려보세요!</span>
                        </div>
                        <div className="business-profile-button">
                            <a href="/daangnmarket">앱 다운로드 하기</a>
                        </div>
                    </section>
                </div>
            </JobsListWrap>
    );
};

export default JobsList;

const JobsListWrap = styled.div`
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
    .business-profile-container_01 {
        background-color: #009ceb1a;
        padding: 24px 22px 24px 32px;
        align-items: center;
        flex-direction: row;
        overflow: hidden;
        border-radius: 0.375rem;
        height: 72px;
        display: flex;
    }
    .business-profile-container_02 {
        background-color: #ff6f0f24;
        padding: 24px 22px 24px 32px;
        align-items: center;
        flex-direction: row;
        overflow: hidden;
        border-radius: 0.375rem;
        height: 72px;
        display: flex;
    }
    .business-profile-image_01 {
        background-image: url(${JobsImage_01});
        background-size: 72px 72px;
        width: 72px;
        height: 72px;
    }
    .business-profile-image_02 {
        background-image: url(${JobsImage_02});
        background-size: 72px 72px;
        width: 72px;
        height: 72px;
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
