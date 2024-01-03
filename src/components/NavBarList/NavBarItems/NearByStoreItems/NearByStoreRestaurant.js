import styled from "styled-components";
import NearByStoreItem from "../NearByStoreItem";

const sampleArticle2 = {
    name: "식당",
    region: "왕십리",
    desc: "안녕하세요. 식당입니다",
    url: "/daangnmarket/fleamarket",
    urlToImage: "https://via.placeholder.com/80",
    infos: "후기428 ∙ 단골877 ∙ 식당"
};

const array = [];
for (let i = 0; i < 10; i++) {
    array.push(<NearByStoreItem article={sampleArticle2}/>);
};

const NearByStoreRestaurant = () => {
    return (
        <NearByStoreRestaurantWrap>
            {array}
        </NearByStoreRestaurantWrap>
    );
};

export default NearByStoreRestaurant;

const NearByStoreRestaurantWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    line-height: 1.15;
`
