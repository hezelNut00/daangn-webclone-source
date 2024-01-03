import styled from "styled-components";
import NearByStoreItem from "../NearByStoreItem";

const sampleArticle2 = {
    name: "제목",
    region: "성동구",
    desc: "description",
    url: "/daangnmarket/fleamarket",
    urlToImage: "https://via.placeholder.com/80",
    infos: "후기428 ∙ 단골877 ∙ 전문"
};

const array = [];
for (let i = 0; i < 8; i++) {
    array.push(<NearByStoreItem article={sampleArticle2}/>);
};

const NearByStoreAll = () => {
    return (
        <NearByStoreAllWrap>
            {array}
        </NearByStoreAllWrap>
    );
};

export default NearByStoreAll;

const NearByStoreAllWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    line-height: 1.15;
`
