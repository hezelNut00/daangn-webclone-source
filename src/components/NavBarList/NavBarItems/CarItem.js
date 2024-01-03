import styled from "styled-components";

const CarItem = ({ article }) => {
    const { url, urlToImage, name, modelYear, carMileage, region, price } = article;
    // const priceNum = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    function numberToKorean(number){
        var inputNumber  = number < 0 ? false : number;
        var unitWords    = ['', '만', '억', '조', '경'];
        var splitUnit    = 10000;
        var splitCount   = unitWords.length;
        var resultArray  = [];
        var resultString = '';
    
        for (var i = 0; i < splitCount; i++){
             var unitResult = (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
            unitResult = Math.floor(unitResult);
            if (unitResult > 0){
                resultArray[i] = unitResult;
            }
        }
    
        for (let i = 0; i < resultArray.length; i++){
            if(!resultArray[i]) continue;
            resultString = String(resultArray[i]) + unitWords[i] + resultString;
        }
    
        return resultString;
    }

    return (
        <CarItemWrap>
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
                        <span>{modelYear}년식 ・ {carMileage}만km ・ {region}</span>
                    </div>
                    <div className="nbs-list-item-desc">{numberToKorean(price)}</div>
                </a>
            </div>
        </CarItemWrap>
    );
}

export default CarItem;

const CarItemWrap = styled.div`
    width: 336px;
    height: 100px;
    align-items: center;
    padding: 16px;
    padding-right: 0;
    display: flex;
    margin-bottom: 10px;
    margin-right: 32px;
    &:hover {
        
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
            line-height: 1.32;
            white-space: normal;
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 4px;
            width: 225px;
            overflow: hidden;
            // white-space: nowrap;
            text-overflow: ellipsis;
            word-break: break-all;
            display: -webkit-box;
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