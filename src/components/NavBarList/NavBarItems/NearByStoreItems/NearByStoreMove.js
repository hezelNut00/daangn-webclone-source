import styled from "styled-components";
import NearByStoreItem from "../NearByStoreItem";

const sampleArticle2 = {
    name: "이사",
    region: "성동구",
    desc: "안녕하세요 용달입니다.",
    url: "/daangnmarket/fleamarket",
    urlToImage: "https://via.placeholder.com/80",
    infos: "후기428 ∙ 단골877 ∙ 이사/용달"
};

const array = [];
for (let i = 0; i < 10; i++) {
    array.push(<NearByStoreItem article={sampleArticle2}/>);
};

const NearByStoreMove = () => {
    return (
        <NearByStoreMoveWrap>
            {array}
        </NearByStoreMoveWrap>
    );
};

export default NearByStoreMove;

const NearByStoreMoveWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    line-height: 1.15;
`
