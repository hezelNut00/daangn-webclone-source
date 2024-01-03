import styled from "styled-components";

const JobsItem = ({ article }) => {
    const { url, urlToImage, name, company, region, salary, price } = article;
    const priceNum = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return (
        <JobsItemWrap>
            {urlToImage && (
                <div className='thumbnail'>
                    <a href={url} target='_blank' rel='noopener noreferrer'>
                        <img src={urlToImage} alt='thumbnail' />
                    </a>
                </div>
            )}
            <div className='contents'>
                <a href={url} target='_blank' rel='noopener noreferrer'>
                    <div className="nbs-list-item-name-wrap">
                        <div className="nbs-list-item-name">{name}</div>
                    </div>
                    
                    <div className="nbs-list-item-infos">
                        <span>{company} ・ {region}</span>
                    </div>
                    <div className="nbs-list-item-desc">{salary} {priceNum}</div>
                </a>
            </div>
        </JobsItemWrap>
    );
}

export default JobsItem;

const JobsItemWrap = styled.div`
    width: 336px;
    height: 100px;
    align-items: center;
    padding: 16px;
    padding-right: 0;
    display: flex;
    margin-bottom: 10px;
    margin-right: 32px;
    &:hover {
        background-color: #f2f3f6;
    }
    & + & {
        
    }
    .thumbnail {
        margin-right: 16px;
        img {
            display: flex;
            width: 108px;
            height: 108px;
            object-fit: cover;
            border: 1px solid #eaebee;
            border-radius: 0.5rem;
        }
    }
    .contents {
        align-items: center;
        .nbs-list-item-name-wrap {
            display: flex;
            width: 238px;
        }
        a {
            align-items: center;
        }
        .nbs-list-item-name {
            flex: 1;
            margin: 0;
            line-height: 1.5;
            white-space: normal;
            font-size: 1.125rem;
            margin-bottom: 4px;
            width: 235px;
            overflow:hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
        .nbs-list-item-region {
            margin: 0;
            white-space: normal;
            font-size: 0.875rem;
            margin-bottom: 4px;
            line-height: 1.5;
            color: #868b94;
        }
        .nbs-list-item-desc {
            width: 240px;
            height: 38px;
            margin-bottom: 4px;
            line-height: 1.36;
            font-weight: 700;
            font-size: 1rem;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
        .nbs-list-item-infos {
            color: #868e96;
            font-size: 13px;
            margin-bottom: 4px;
        }
    }
`;