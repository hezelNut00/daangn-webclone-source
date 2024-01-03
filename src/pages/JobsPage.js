import { useParams } from 'react-router-dom';
import JobsList from '../components/NavBarList/JobsList';
import Banner8 from "../components/banners/Banner8";
import styled from 'styled-components';

const JobsPage = () => {
    const params = useParams();

    // 카테고리가 선택되지 않았으면 기본값 ''로 사용
    const categoryId = params.categoryId || '';

    return (
        <JobsPageWrap>
            <Banner8 />
            <JobsList categoryId={categoryId} />
        </JobsPageWrap>
    );
};

export default JobsPage;

const JobsPageWrap = styled.div`
    padding-top: 64px;
`
