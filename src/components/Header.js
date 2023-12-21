import styled from 'styled-components';

import Logo from './Logo';
import NavBar from './NavBar';
import NavBarRight from './NavBarRight';

const Header = () => {
    return (
        <HeaderWrap>
            <div className="Header_Container">
                <Logo />
                <NavBar />
                <NavBarRight />
            </div>
        </HeaderWrap>
    );
};

export default Header;

const HeaderWrap = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    z-index: 100;
    position: fixed;
    background: white;
    .Header_Container {
        margin: auto;
        padding: 12px 20px;
        display: flex;
    }
    .Logo {
        align-items: center;
    }
`;
