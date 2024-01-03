import styled from "styled-components";

const HotArticleNav = () => {
    return (
        <HotArticleNavWrap id="hot-articles-navigation">
            <select name="region1" id="region1" className="hot-articles-nav-select">
                <option value="">지역을 선택하세요</option>
                <option value="서울특별시">서울특별시</option>
                <option value="부산광역시">부산광역시</option>
                <option value="대구광역시">대구광역시</option>
                <option value="인천광역시">인천광역시</option>
            </select>
            <select name="region2" id="region2" disabled="disabled" className="hot-articles-nav-select">
                <option value="">동네를 선택하세요</option>
                <option value="">slot</option>
                <option value="">slot</option>
                <option value="">slot</option>
            </select>
            <select name="region3" id="region3" disabled="disabled" className="hot-articles-nav-select">
                <option value="">동을 선택하세요</option>
                <option value="">slot</option>
                <option value="">slot</option>
                <option value="">slot</option>
            </select>
        </HotArticleNavWrap>
    );
};

export default HotArticleNav;

const HotArticleNavWrap = styled.div`
    width: 980px;
    margin: 0 auto;
    text-align: right;
    margin-bottom: 30px;
    .hot-articles-nav-select {
        z-index: -1;
        width: 180px;
        margin-left: 8px;
        padding: 12px 16px;
        border-radius: 6px;
        border: solid 1px #e9ecef;
        box-sizing: border-box;
        font-size: 17px;
        letter-spacing: -0.6px;
        text-align: left;
        appearance: none;
        background: #fff url(https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/icon-arrow-down-ea33c4b4c74ce0aca95580c70c5ba1f464ff5833213b0fc8db5de0fab98b57e1.svg) no-repeat 89% 50%;
    }
    #region2 {
        disabled: false;
        color: #adb5bd;
        background: #f8f9fa url(https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/icon-arrow-down-off-e3ec4ed62a2e3dc9f7a0b64fb7a91d482a63b43e490b6ba6015dcc2bbd33609a.svg) no-repeat 89% 50%
    }
    #region3 {
        display: none;
        color: #adb5bd;
        background: #f8f9fa url(https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/icon-arrow-down-off-e3ec4ed62a2e3dc9f7a0b64fb7a91d482a63b43e490b6ba6015dcc2bbd33609a.svg) no-repeat 89% 50%
    }
`

// const SelectIcon = () => {
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path fill-rule="evenodd" clip-rule="evenodd" d="M6.43427 9.43433C6.74669 9.12191 7.25322 9.12191 7.56564 9.43433L12 13.8686L16.4343 9.43433C16.7467 9.12191 17.2532 9.12191 17.5656 9.43433C17.8781 9.74675 17.8781 10.2533 17.5656 10.5657L12.5656 15.5657C12.2532 15.8781 11.7467 15.8781 11.4343 15.5657L6.43427 10.5657C6.12185 10.2533 6.12185 9.74675 6.43427 9.43433Z" fill="#212529"/>
//     </svg>
// }
