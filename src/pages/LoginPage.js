import styled from "styled-components";

import AuthTemplate from "../components/auth/AuthTemplate";
import LoginForm from "../containers/auth/LoginForm";

const LoginPage = () => {
    return(
        <Login>
            <AuthTemplate>
                <LoginForm />
            </AuthTemplate>
        </Login>
    );
}

export default LoginPage;

const Login = styled.div`
    padding-top: 64px;
    height: 1000px;
`;