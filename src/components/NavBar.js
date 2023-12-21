import styled from "styled-components";

const NavBar = () => {
    return (
        <Nav>
            <div>
                <ul className="">
                    <li className="HeaderNavBarList">
                        <a href="/daangnmarket">중고거래</a>
                    </li>
                    <li className="HeaderNavBarList">
                        <a href="/daangnmarket">동네업체</a>
                    </li>
                    <li className="HeaderNavBarList">
                        <a href="/daangnmarket">알바</a>
                    </li>
                    <li className="HeaderNavBarList">
                        <a href="/daangnmarket">부동산 직거래</a>
                    </li>
                    <li className="HeaderNavBarList">
                        <a href="/daangnmarket">중고차 직거래</a>
                    </li>
                </ul>
            </div>
        </Nav>
    );
};

export default NavBar;

const Nav = styled.div`
    padding-right: 80px;
    padding-top: 8px;
    padding-bottom: 8px;
    display: flex;
    @media screen and (max-width: 1024px) {
        display: none;
    }
    .li {
        float: left;
        display: inline-block; 
    }
    .a {

    }
`;