import { useParams } from 'react-router-dom';
import FleaMarketList from '../components/NavBarList/FleaMarketList';
import Banner6 from "../components/banners/Banner6";
import styled from 'styled-components';


const FleamarketPage = () => {
    const params = useParams();

    // 카테고리가 선택되지 않았으면 기본값 ''로 사용
    const category = params.category || '';

    return (
        <Main>
            <Banner6 />
            <FleaMarketList category={category} />
        </Main>
    );
};

export default FleamarketPage;


const Main = styled.div`
    padding-top: 64px;
`;