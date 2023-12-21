import styled, {css} from "styled-components";
import { Link } from "react-router-dom";

const Button = props => {
    return props.to ? (
        <StyledLink {...props} cyan={props.cyan ? 1 : 0} />
    ) : (
        <StyledButton {...props} />
    );
};

export default Button;

const buttonStyle = css`
    display: flex;
    margin-right: 12px;
    padding: 8px 0px;
    border-radius: 4px;
    line-height: 1.3;
    border: 1px solid rgb(233, 233, 233);
    color: black;
    background: white;
    font-weight: 700;
    font-size: 15px;
    min-width: 100px;
    justify-content: center;
    &:hover {
        background-color: rgb(233, 233, 233);
    }
`
const StyledButton = styled.button`
    ${buttonStyle}
`

const StyledLink = styled(Link)`
    ${buttonStyle}
`