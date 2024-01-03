import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <NavWrap>
            {categories.map(c => (
                <Category key={c.name} className={({ isActive }) => ( isActive ? 'active' : undefined)} to={c.name === 'all' ? '/' : `/${c.name}`} onClick={() => {
                    window.scrollTo({
                            top: 0,
                        });
                }}>
                        <span>{c.text}</span>
                </Category>
            ))}
        </NavWrap>
    );
};

export default NavBar;

const categories = [
    {
        name: 'fleamarket',
        text: '중고거래'
    },
    {
        name: 'nearbystore',
        text: '동네업체'
    },
    {
        name: 'jobs',
        text: '알바'
    },
    {
        name: 'realty',
        text: '부동산 직거래'
    },
    {
        name: 'car',
        text: '중고차 직거래'
    },
]

const NavWrap = styled.div`
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

const Category = styled(NavLink)`
    display: inline-block;
    margin-right: 30px;
    font-size: 18px;
    font-weight: 700;
    white-space: nowrap;
    &:hover {
        color: #868b94;
    }
    &.active {
        color: #FF6F0F;
    }
    
`