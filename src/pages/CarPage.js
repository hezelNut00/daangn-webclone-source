import { useParams } from 'react-router-dom';
import CarList from '../components/NavBarList/CarList';
import Banner10 from "../components/banners/Banner10";
import styled from 'styled-components';

const CarPage = () => {
    const params = useParams();

    // 카테고리가 선택되지 않았으면 기본값 ''로 사용
    const categoryId = params.categoryId || '';

    return (
        <CarPageWrap>
            <Banner10 />
            <CarList categoryId={categoryId} />
        </CarPageWrap>
    );
};

export default CarPage;

const CarPageWrap = styled.div`
    padding-top: 64px;
`
