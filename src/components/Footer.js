/* eslint-disable */ 

import styled from "styled-components";

import FacebookIcon from "./sns/FacebookIcon";
import InstargramIcon from "./sns/InstargramIcon";
import YoutubeIcon from "./sns/YoutubeIcon";
import BlogIcon from "./sns/BlogIcon";

const Footer = () => { 
    return (
        <FooterWrap>
            <div className="Footer_Container">
                <div className="Footer_Section_Wrap">
                    <section className="Footer_Section_01">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">중고거래</a>
                                </li>
                                <li>
                                    <a href="#">동네업체</a>
                                </li>
                                <li>
                                    <a href="#">당근알바</a>
                                </li>
                                <li>
                                    <a href="#">부동산 직거래</a>
                                </li>
                                <li>
                                    <a href="#">중고차 직거래</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="#">당근비즈니스</a>
                                </li>
                                <li>
                                    <a href="#">채팅하기</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="https://cs.kr.karrotmarket.com/wv/faqs">자주 묻는 질문</a>
                                </li>
                                <li>
                                    <a href="https://about.daangn.com/">회사 소개</a>
                                </li>
                                <li>
                                    <a href="https://about.daangn.com/jobs/">인재 채용</a>
                                </li>
                            </ul>
                        </nav>
                        <section>
                            <div className="download-app-text">당근 앱 다운로드</div>
                            <div id="download-buttons" >
                            <a href="https://apps.apple.com/us/app/karrot-buy-sell-locally/id1018769995">
                                <AppleIcon/>
                                <div>App Store</div>
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.towneers.www">
                                <GoogleIcon className="download-buttons-google"/>
                                <div>Google Play</div>
                            </a>
                            </div>
                        </section>
                    </section>
                    <section className="Footer_Section_02">
                        <section className="Footer_Section_02_Wrap">
                            <section>
                                <div>
                                    <span>
                                        <b>대표 </b>
                                        김용현, 황도연
                                    </span>
                                    <span> | </span>
                                    <span>
                                        <b>사업자번호 </b>
                                        357-87-00088
                                    </span>
                                </div>
                                <div>
                                    <b>직업정보제공사업 신고번호 </b>
                                    J1200020200016
                                </div>
                                <div>
                                    <div>
                                        <b>주소 </b>
                                        서울특별시 구로구 디지털로30길 28, 609호(당근서비스)
                                    </div>
                                    <div>
                                        <span>
                                            <b>전화 </b>
                                            1577-9796
                                        </span>
                                        <span> | </span>
                                        <span>
                                            <b>고객문의 </b>
                                            cs@daangnservice.com
                                        </span>
                                    </div>
                                </div>
                            </section>
                            <section className="Footer_Section_02_Inquiry">
                                <a>제휴 문의</a>
                                <a>광고 문의</a>
                                <a>PR 문의</a>
                                <a>IR 문의</a>
                            </section>
                        </section>
                        <section className="Footer_Section_02_SnsIcons">
                            <a href="https://www.facebook.com/daangn"><FacebookIcon /></a>
                            <a href="https://www.instagram.com/daangnmarket/"><InstargramIcon /></a>
                            <a href="https://www.youtube.com/channel/UC8tsBsQBuF7QybxgLmStihA"><YoutubeIcon /></a>
                            <a href="https://blog.naver.com/daangn"><BlogIcon /></a>
                        </section>
                    </section>
                    <section className="Footer_Section_02_ToS">
                                <div>
                                    <a href="https://www.daangn.com/policy/terms">이용약관</a>
                                </div>
                                <div>
                                    <a href="https://privacy.daangn.com/">개인정보처리방침</a>
                                </div>
                                <div>
                                    <a href="https://www.daangn.com/policy/location">위치기반서비스 이용약관</a>
                                </div>
                                <div>
                                    <a href="https://www.daangn.com/wv/faqs/3994">이용자보호 비전과 계획</a>
                                </div>
                                <div>
                                    <a href="https://www.daangn.com/wv/faqs/9010">청소년보호정책</a>
                                </div>
                    </section>
                </div>
            </div>
        </FooterWrap>
    );
};

export default Footer;

const FooterWrap = styled.div`
    display: flex;
    width: 100%;
    height: 630px;
    padding: 0 16px;
    border-top: 1px solid #eaebee;
    .Footer_Container {
        margin: 0 auto;
    }
    .Footer_Section_Wrap {
        padding: 48px 0;
        width: 768px;
    }
    .Footer_Section_01 {
        display: flex;
    }
    .download-app-text {
        font-size: 1.1rem;
        line-height: 1.4;
        font-weight: 700;
        margin-bottom: 10px;
    }
    #download-buttons {
        display: flex;
        height: 56px;
        text-align: center;
        align-items: center;
        a {
            background: #f2f3f6;
            color: black;
            padding: 10px 1rem;
            margin-right: 1rem;
            border-radius: 10px;
            text-align: center;
            align-item: center;
            display: flex;
            &:hover {
                background-color: #dee2e6
            }
            div {
                width:95px;
                height: 28px;
                font-size: 16px;
                font-weight: 700;
                line-height: 28px;
                margin-left: 5px;
            }
            svg {
                padding-top: 4px;
            }
        }
    }
    nav {
        display: flex;
        min-width: 450px;
        line-height: 1.4;
        font-size: 14px;
        font-weight: 500;
    }
    ul {
        width: 30%;
    }
    li {
        margin-top: 16px;
        margin-bottom: 32px;
        height: 20px
    }

    .Footer_Section_02 {
        margin-top: 50px;
        border-top: 1px solid #eaebee;
        color: gray;
        display: flex;
        .Footer_Section_02_Wrap {
            margin-top: 50px;
            
        }
        .Footer_Section_02_Inquiry {
            margin-top: 20px;
            a{
                margin-right: 20px;
                float: left;
                font-weight: 500;
            }
        }
        .Footer_Section_02_SnsIcons {
            display: flex;
            margin-top: 50px;
            margin-left: 200px;
            a {
                margin-right: 10px;
            }
        }
    }
    .Footer_Section_02_ToS {
        display: flex;
        margin-top: 20px;
        a {
            margin-right: 15px;
        }
    }
`

const GoogleIcon = () => {
    return (
    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.588058 20.0375C0.231853 19.9415 0 19.5878 0 19.0405V0.973127C0 0.466194 0.196313 0.124304 0.507507 0L9.38456 10.0687L0.588058 20.0375ZM1.81005 19.654L12.4952 13.5969L9.89269 10.645L1.81005 19.654ZM12.5688 6.46007L2.03254 0.485998L9.9081 9.47536L12.5688 6.46007ZM13.2837 6.8654L17.4112 9.20572C18.1927 9.64882 18.1998 10.3631 17.4112 10.8102L13.1792 13.2091L10.4189 10.0585L13.2837 6.8654Z" fill="black"/>
    </svg>
    );
};

const AppleIcon = () => {
    return (
        <svg width="18" height="21" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6419 5.31901C14.9594 5.31901 16.4414 7.65479 16.4414 7.65479C16.4414 7.65479 14.1807 8.93268 14.1807 11.708C14.1807 15.0019 17.0206 15.9601 17.0206 15.9601C17.0206 15.9601 14.7791 21.5003 12.2621 21.5003C10.8467 21.5003 10.7521 20.6522 8.87126 20.6522C7.23785 20.6522 6.68701 21.5003 5.44272 21.5003C3.06784 21.5003 0 16.0999 0 11.708C0 7.14589 3.10607 5.31901 5.05312 5.31901C6.76297 5.31901 7.47505 6.36713 8.85215 6.36713C10.0112 6.36713 10.9232 5.31901 12.6419 5.31901ZM12.2434 0.666992C12.585 2.90305 10.638 5.66856 8.31111 5.5786C7.96904 2.73341 10.4767 0.81709 12.2434 0.666992Z" fill="black"/>
        </svg>
    );
};