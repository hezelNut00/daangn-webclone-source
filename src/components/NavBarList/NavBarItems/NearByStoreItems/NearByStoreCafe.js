import styled from "styled-components";
import NearByStoreItem from "../NearByStoreItem";
import CoffeeImage from "../../../../shared/커피.webp";

const sampleArticle2 = {
    name: "카페",
    region: "성동구",
    desc: "남양주 카페입니다 ^^",
    url: "/daangnmarket/fleamarket",
    urlToImage: CoffeeImage,
    infos: "후기428 ∙ 단골877 ∙ 카페"
};

const array = [];
for (let i = 0; i < 10; i++) {
    array.push(<NearByStoreItem article={sampleArticle2}/>);
};

const NearByStoreCaffee = () => {
    return (
        <NearByStoreCaffeeWrap>
            {array}
        </NearByStoreCaffeeWrap>
    );
};

export default NearByStoreCaffee;

const NearByStoreCaffeeWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    line-height: 1.15;
`
