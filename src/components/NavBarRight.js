import styled from "styled-components";
// import Responsive from "./Responsive"; // 반응형
import Button from "./Button";

const NavBarRight = () => {
    return (
        <NavRight>
            <input placeholder="물품이나 동네를 검색해보세요"/>
            <form>
                <Button to="/login">채팅하기</Button>
            </form>
            <form>
                <Button to="/login">로그인</Button>
            </form>
        </NavRight>
    );
};

export default NavBarRight;

const NavRight = styled.div`
    display: flex;
    input {
        width: 264px;
        height: 22px;
        margin-right: 12px;
    }
    form {
        display: flex;
        height: 40px;
    }
    }
`