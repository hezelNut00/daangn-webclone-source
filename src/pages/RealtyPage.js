import { useParams } from 'react-router-dom';
import RealtyList from '../components/NavBarList/RealtyList';
import Banner9 from "../components/banners/Banner9";
import styled from 'styled-components';

const RealtyPage = () => {
    const params = useParams();

    // 카테고리가 선택되지 않았으면 기본값 ''로 사용
    const categoryId = params.categoryId || '';

    return (
        <RealtyPageWrap>
            <Banner9 />
            <RealtyList categoryId={categoryId} />
        </RealtyPageWrap>
    );
};

export default RealtyPage;

const RealtyPageWrap = styled.div`
    padding-top: 64px;
`
