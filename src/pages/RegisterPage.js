import styled from "styled-components";

import AuthTemplate from "../components/auth/AuthTemplate";
import RegisterForm from "../containers/auth/RegisterForm";

const RegisterPage = () => {
    return(
        <SignUp>
            <AuthTemplate>
                <RegisterForm />
            </AuthTemplate>
        </SignUp>
    );
};

export default RegisterPage;

const SignUp = styled.div`
    padding-top: 64px;
    height: 1000px;
`;