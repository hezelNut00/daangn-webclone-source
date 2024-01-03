import { useParams } from 'react-router-dom';
import NearByStoreList from '../components/NavBarList/NearByStoreList';
import Banner7 from "../components/banners/Banner7";
import styled from 'styled-components';


const NearbystorePage = () => {
    const params = useParams();

    // 카테고리가 선택되지 않았으면 기본값 ''로 사용
    const categoryId = params.categoryId || '';

    return (
        <Main>
            <Banner7 />
            <NearByStoreList categoryId={categoryId} />
        </Main>
    );
};

export default NearbystorePage;


const Main = styled.div`
    padding-top: 64px;
`;