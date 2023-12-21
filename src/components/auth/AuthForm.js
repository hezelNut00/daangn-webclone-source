import styled from "styled-components";
import { Link }  from "react-router-dom";

/**
 * 회원가입, 로그인 폼
 */

const AuthForm = ({type}) => {
    const text = textMap[type];
    return (
        <AuthFormWrap>
            <form>
                <StyledInput autoComplete="username" name="username" placeholder="아이디"/>
                <StyledInput autoComplete="new-password" name="password" placeholder="비밀번호" type="password"/>
                {
                    type === "register" && (
                        <StyledInput autoComplete="new-password" name="passwordConfirm" placeholder="비밀번호 확인" type="password" />
                    )
                }
            </form>
            <button className="LoginButton">{text}</button>
            <Footer>
                {type === 'login' ? (
                    <Link to="/register">회원가입</Link>
                    ) : (
                    <Link to="/login">로그인</Link>    
                    )
                }
            </Footer>
        </AuthFormWrap>
    );
};

export default AuthForm;

const AuthFormWrap = styled.div`
    h3 {
        margin: 0;
        margin-bottom: 1rem;
    }
    .LoginButton {
        margin-top: 3rem;
        width: 312px;
        height: 49px;
        background: #FF6F0F;
        color: white;
        padding: 14px 2rem;
        border: none;
        border-radius: 5px;
        text-align: center;
        align-item: center;
        font-size: 20px;
        font-weight: 800;
        &:hover {
            background: #f06000;
        }
`

/**
 * input 스타일
 */

const StyledInput = styled.input`
    background: white;
    font-size: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 0.5rem;
    outline: none;
    width: 80%;
    &:focus {
        border: 2px solid #FF6F0F;
    }
    & + & {
        margin-top: 0.2rem;
    }
`

/**
 * 회원가입 링크
 */

const Footer = styled.div`
    margin-top: 3rem;
    margin-right: 1.5rem;
    text-align: right;
    a {
        &:hover {
            color: #FF6F0F;
            text-decoration: underline;
        }
    }
`

const textMap = {
    login: '로그인',
    register: '회원가입',
};