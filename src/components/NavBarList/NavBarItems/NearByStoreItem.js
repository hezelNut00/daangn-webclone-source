import styled from "styled-components";

const NearByStoreItem = ({ article }) => {
    const { url, urlToImage, name, region, desc, infos } = article;
    // const priceNum = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return (
        <NearByStoreItemWrap>
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
                        <div className="nbs-list-item-region" >{region}</div>
                    </div>
                    <div className="nbs-list-item-desc">{desc}</div>
                    <div className="nbs-list-item-infos">
                        <span>{infos}</span>
                    </div>
                </a>
            </div>
        </NearByStoreItemWrap>
    );
}

export default NearByStoreItem;

const NearByStoreItemWrap = styled.div`
    width: 336px;
    height: 100px;
    align-items: center;
    padding: 16px;
    padding-right: 0;
    display: flex;
    margin-bottom: 10px;
    margin-right: 32px;
    border-bottom: 1px solid rgba(0,0,0,0.10);
    &:hover {
        background-color: #f2f3f6;
        border-bottom: none;
    }
    & + & {
        
    }
    .thumbnail {
        margin-right: 16px;
        img {
            display: flex;
            width: 80px;
            height: 80px;
            object-fit: cover;
            border: 1px solid #eaebee;
            border-radius: 50px;
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
            font-weight: 700;
            margin-bottom: 4px;
            width: 220px;
            overflow:hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
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
            margin-top: 2px;
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
            margin-top: 4px;
        }
    }
`;