import styled from "styled-components";
import NearByStoreItem from "../NearByStoreItem";

const sampleArticle2 = {
    name: "헬스asdasdasdasdasdasdasdaasdasd",
    region: "성동구",
    desc: "프리미엄 메디컬 필라테스/기구 필라테스 / 소도구 필라테스 맞춤형 운동케어 / 다이어트 자세교정 / 산후운동 / 체형교정 /근막이완 / 지도자과정 / 대한피지컬메디슨학회",
    url: "/daangnmarket/nearbystore/health",
    urlToImage: "https://via.placeholder.com/80",
    infos: "후기428 ∙ 단골877 ∙ 헬스장"
};

const array = [];
for (let i = 0; i < 10; i++) {
    array.push(<NearByStoreItem article={sampleArticle2}/>);
};

const NearByStoreHealth = () => {
    return (
        <NearByStoreHealthWrap>
            {array}
        </NearByStoreHealthWrap>
    );
};

export default NearByStoreHealth;

const NearByStoreHealthWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    line-height: 1.15;
`
