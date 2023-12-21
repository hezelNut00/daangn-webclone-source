import styled from "styled-components";
import AuthLogo from "./AuthLogo";

import { Link } from "react-router-dom";

/**
 * 회원가입/로그인 페이지의 레이아웃 컴포넌트
 */

const AuthTemplate = ({ children }) => {
    return (
        <AuthTemplateWrap>
            <WhiteBox>
                <div className="logo-area">
                    <Link to="/"><AuthLogo /></Link>
                </div>
                {children}
            </WhiteBox>
        </AuthTemplateWrap>
    );
};

export default AuthTemplate;


const AuthTemplateWrap = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    /* 내부 내용 중앙 정렬 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const WhiteBox = styled.div`
    text-align: center;
    .logo-area {
        width: 180px;
        margin-top: 1rem;
        margin-bottom: 1rem;
        margin-left: 90px;
        
        display: block;
        padding-top: 1rem;
        padding-bottom: 1rem;
        text-align: center;
        align-items: center;
        font-weight: bold;
        letter-spacing: 2px;
        &:hover {
            transition: all 0s linear;
            transform: scale(1.15);
        }
    }
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    padding: 2rem;
    padding-top: 0;
    width: 360px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
`;