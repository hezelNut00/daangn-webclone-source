import styled from "styled-components";

const HotArticleItem = ({ article }) => {
    const { title, price, adress, url, urlToImage, interest, chat } = article;
    const priceNum = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    return (
        <HotArticleItemWrap>
            {urlToImage && (
                <div className='thumbnail'>
                    <a href={url} target='_blank' rel='noopener noreferrer'>
                        <img src={urlToImage} alt='thumbnail' />
                    </a>
                </div>
            )}
            <div className='contents'>
                <h2 className="card-title">
                    <a href={url} target='_blank' rel='noopener noreferrer'>
                        {title}
                    </a>
                </h2>
                <div className="card-price" >{priceNum + "원"}</div>
                <div className="card-region-name">{adress}</div>
                <div className="card-counts">
                    <span>관심 {interest}</span>
                    ∙
                    <span>채팅 {chat}</span>
                </div>
            </div>
        </HotArticleItemWrap>
    );
}

export default HotArticleItem;

const HotArticleItemWrap = styled.div`
    
    .thumbnail {
        img {
            display: flex;
            width: 223px;
            height: 223px;
            object-fit: cover;
            border: 1px solid #eaebee;
            border-radius: 12px;
        }
    }
    .contents {
        margin-bottom: 56px;
        h2 {
            margin: 0;
            a {
                font-size: 16px;
                color: black;
                font-weight: normal;
            }
        }
        .card-price {
            margin: 0;
            line-height: 1.5;
            white-space: normal;
            font-size: 15px;
            font-weight: 700;
            margin-bottom: 4px;
        }
        .card-region-name {
            margin: 0;
            white-space: normal;
            font-size: 13px;
            margin-bottom: 4px;
            line-height: 1.5;
        }
        .card-counts {
            color: #868e96;
            font-size: 13px;
        }
    }
`;