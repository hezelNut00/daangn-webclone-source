import styled from "styled-components";
import NearByStoreItem from "./NavBarItems/NearByStoreItem";
import NearByStroeIcon from "../icons/NearByStroeIcon";
import { useLocation } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";


const sampleArticle2 = {
    name: "제목",
    region: "성동구",
    desc: "서울 성동구 성수1동",
    url: "/daangnmarket/fleamarket",
    urlToImage: "https://via.placeholder.com/80",
    infos: "후기 단골 전문"
};

const array = [];
for (let i = 0; i < 8; i++) {
    array.push(<NearByStoreItem article={sampleArticle2}/>);
};

const NearByStoreList = () => {
    const location = useLocation();
    
    return (
            <NearByStoreListWrap>
                <section className="nearbystore-article-list">
                    <h1 className="article-list-title">다양한 동네업체를 볼 수 있어요</h1>
                    <div className="article-list-nav">
                        <p>{location.search}</p>
                        {categories.map(c => (
                            <Category key={c.name} className={({ isActive }) => ( isActive ? 'active' : undefined)} to={c.name === 'all' ? '/nearbystore/all' : `/nearbystore/${c.name}`} >
                                    <span>{c.text}</span>
                            </Category>
                        ))}
                    </div>
                    <div className="cards-wrap">
                        <Outlet />
                    </div>
                </section>
                <div className="business-profile-wrap">
                    <section className="business-profile-container">
                        <div className="business-profile-image"><NearByStroeIcon /></div>
                        <div className="business-profile-desc">
                            <h6>업체를 운영하고 계신가요?</h6>
                            <span>당근에 등록하고 이웃에게 알려보세요!</span>
                        </div>
                        <div className="business-profile-button">
                        <a href="https://business.daangn.com/">비즈프로필 만들기</a>
                        </div>
                    </section>
                </div>
                
            </NearByStoreListWrap>
    );
};

export default NearByStoreList;

const categories = [
    {
        name: 'all',
        text: '전체',
    },
    {
        name: 'restaurant',
        text: '식당',
    },
    {
        name: 'cafe',
        text: '카페'
    },
    {
        name: 'move',
        text: '용달/이사'
    },
    {
        name: 'beauty',
        text: '뷰티/미용'
    },
    {
        name: 'health',
        text: '헬스/필라테스/요가'
    },
]

const NearByStoreListWrap = styled.div`
    padding-bottom: 100px;
    margin-top: 64px;
    width: 757px;
    display: block;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
    .nearbystore-article-list {
        padding-top: 50px;
        
    }
    .article-list-title {
        font-size: 32px;
        line-height: 43.2px;
        text-align: center;
        margin: 0;
        padding: 0;
        
    }
    .article-list-nav {
        display: flex;
        justify-content: center;
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
    .cards-wrap {
        display: flex;
        padding-top: 20px;
        width: 768px;
        & + & {
        }
    }
    .business-profile-wrap {
        margin-top: 72px;
    }
    .business-profile-container {
        background-color: #f7be6824;
        padding: 24px 22px 24px 32px;
        align-items: center;
        flex-direction: row;
        overflow: hidden;
        border-radius: 0.375rem;
        height: 72px;
        display: flex;
    }
    .business-profile-image {
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
            font-size: 1.125rem;
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
const Category = styled(NavLink)`
    border: 1px solid #eaebee;
    border-radius: 50px;
    line-height: 1.5;
    padding: 8px 16px;
    & + & {
        margin-left: 8px;
    }
    &.active {
        background-color: #4d5159;
        color: #fff;
    }
`
