import styled from "styled-components";

import AuthTemplate from "../components/auth/AuthTemplate";
import AuthForm from "../components/auth/AuthForm";

const LoginPage = () => {
    return(
        <Login>
            <AuthTemplate>
                <AuthForm type="login" />
            </AuthTemplate>
        </Login>
    );
}

export default LoginPage;

const Login = styled.div`
    padding-top: 64px;
    height: 1000px;
`;