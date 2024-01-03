import styled from "styled-components";

import banner1 from "../../shared/banner1.png";


const Banner1 = () => {
    return (
        <section className="background-pale-peach">
            <HomeMainTop>
                <div className="home-main-desc">
                    <h1 className="home-main-title">
                        당신 근처의
                        <br />
                        지역 생활 커뮤니티
                    </h1>
                    <p className="service-desc">
                         동네라서 가능한 모든것
                        <br />
                        당근에서 가까운 이웃과 함께해요. 
                    </p>
                    <br />
                    <div id="download-buttons">
                        <a href="https://play.google.com/store/apps/details?id=com.towneers.www">
                            <GoogleIcon className="download-buttons-google"/>
                            <div>Google Play</div>
                        </a>
                        <a href="https://apps.apple.com/us/app/karrot-buy-sell-locally/id1018769995">
                            <AppleIcon />
                            <div>App Store</div>
                        </a>
                    </div>
                </div>
                <div className="home-main-image-top">
                    <Image1 />
                </div>
            </HomeMainTop>
        </section>
    );
};

export default Banner1;

const HomeMainTop = styled.div`
    display: flex;
    padding: 24px;
    margin-right: auto;
    margin-left: auto;
    width: 1024px;
    max-width: 1024px;
    .home-main-desc {
        min-width: 500px;
        height:525.5px;
        display: block;
        margin-right: 0px;
        h1 {
            font-size: 54px;
        }
        p {
            color: #7c7c7c;
            font-size: 20px;
            font-weight: 400;
            line-height: 30px;
        }
    }
    .home-main-title {
        padding-top: 120px;
    }
    .home-main-image-top {
        z-index: 5;
        margin-top: -65px;
    }
    #download-buttons {
        display: flex;
        width: 180px;
        height: 56px;
        a {
            background: #FF6F0F;
            color: white;
            padding: 14px 2rem;
            margin-right: 1rem;
            border-radius: 10px;
            text-align: center;
            align-item: center;
            display: flex;
            &:hover {
                background: #f06000;
            }
        }
        div {
            width:100px;
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
`

const Image1 = styled.div`
    width: 655px;
    height: 800px;
    right: 84px;
    background-image: url(${banner1});
    background-size: 685px 804px;
`;

const GoogleIcon = () => {
    return (
    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.588058 20.0375C0.231853 19.9415 0 19.5878 0 19.0405V0.973127C0 0.466194 0.196313 0.124304 0.507507 0L9.38456 10.0687L0.588058 20.0375ZM1.81005 19.654L12.4952 13.5969L9.89269 10.645L1.81005 19.654ZM12.5688 6.46007L2.03254 0.485998L9.9081 9.47536L12.5688 6.46007ZM13.2837 6.8654L17.4112 9.20572C18.1927 9.64882 18.1998 10.3631 17.4112 10.8102L13.1792 13.2091L10.4189 10.0585L13.2837 6.8654Z" fill="white"/>
    </svg>
    );
};

const AppleIcon = () => {
    return (
        <svg width="18" height="21" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6419 5.31901C14.9594 5.31901 16.4414 7.65479 16.4414 7.65479C16.4414 7.65479 14.1807 8.93268 14.1807 11.708C14.1807 15.0019 17.0206 15.9601 17.0206 15.9601C17.0206 15.9601 14.7791 21.5003 12.2621 21.5003C10.8467 21.5003 10.7521 20.6522 8.87126 20.6522C7.23785 20.6522 6.68701 21.5003 5.44272 21.5003C3.06784 21.5003 0 16.0999 0 11.708C0 7.14589 3.10607 5.31901 5.05312 5.31901C6.76297 5.31901 7.47505 6.36713 8.85215 6.36713C10.0112 6.36713 10.9232 5.31901 12.6419 5.31901ZM12.2434 0.666992C12.585 2.90305 10.638 5.66856 8.31111 5.5786C7.96904 2.73341 10.4767 0.81709 12.2434 0.666992Z" fill="white"/>
        </svg>
    );
};
