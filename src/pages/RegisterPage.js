import styled from "styled-components";

import AuthTemplate from "../components/auth/AuthTemplate";
import AuthForm from "../components/auth/AuthForm";

const RegisterPage = () => {
    return(
        <SignUp>
            <AuthTemplate>
                <AuthForm type="register" />
            </AuthTemplate>
        </SignUp>
    );
};

export default RegisterPage;

const SignUp = styled.div`
    padding-top: 64px;
    height: 1000px;
`;