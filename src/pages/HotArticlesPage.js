import { useParams } from 'react-router-dom';
import HotArticleList from '../components/hotArticles/HotArticleList';
import styled from 'styled-components';


const HotArticlePage = () => {
    const params = useParams();

    // 카테고리가 선택되지 않았으면 기본값 ''로 사용
    const category = params.category || '';

    return (
        <Main>
            <HotArticleList category={category} />
        </Main>
    );
};

export default HotArticlePage;


const Main = styled.div`
    padding-top: 64px;
`;