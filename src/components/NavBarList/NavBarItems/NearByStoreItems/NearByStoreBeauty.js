import styled from "styled-components";
import NearByStoreItem from "../NearByStoreItem";

const sampleArticle2 = {
    name: "뷰티",
    region: "인사동",
    desc: "꼼꼼시술 착한가격 유지력 일등 네일샵 (당일 예약 가능 ) 예약문의: 당근톡 카톡 전화 문자 주세요 이달의아트 이벤트아트 늘 다양한 이벤트 준비중이에요 고퀄리티 착한 가격으로 유지력보장 당근마켓 회원분들에게 이벤트 하고 있습니다 프로필 소식 글을 통해 이벤트 참고해주세요^^* 한번 오시면 단골이 될수밖에 없는 만족도 높고 편안하게 받고 가실수 있는 네일샵입니다 ^^* 주차 필요하신분은 미리 말씀해주세요!",
    url: "/daangnmarket/",
    urlToImage: "https://via.placeholder.com/80",
    infos: "후기428 ∙ 단골877 ∙ 뷰티"
};

const array = [];
for (let i = 0; i < 10; i++) {
    array.push(<NearByStoreItem article={sampleArticle2}/>);
};

const NearByStoreBeauty = () => {
    return (
        <NearByStoreBeautyWrap>
            {array}
        </NearByStoreBeautyWrap>
    );
};

export default NearByStoreBeauty;

const NearByStoreBeautyWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    line-height: 1.15;
`
