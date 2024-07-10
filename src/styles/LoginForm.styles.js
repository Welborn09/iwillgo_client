
import styled from 'styled-components';
import backgroundImage from './../assets/images/clean_community.jpg';

export const LoginFormContainer = styled.section`    
  text-align: center;
  background: #203936;
  color: #B8E648;
`;

export const Block_23 = styled.div`
    padding: 4rem 0;
    align-items: center;
    background: url(${backgroundImage}) no-repeat center;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    -ms-background-size: cover;
    position: relative;
    display: grid;
    align-items: center;
    min-height: 100vh;
    z-index: 0;

    &::before {
        content: "";
        background: rgba(8, 18, 39, 0.67);
        position: absolute;
        top: 0;
        min-height: 100%;
        left: 0;
        right: 0;
        z-index: -1;
    }
`;

export const Block_23_container = styled.div.attrs({
    className: 'container'
})`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`;

export const h1 = styled.h1`
`;

export const HomeLink = styled.a`
    width: auto;
    height: 75px;
    text-align: right;
    display: block;
    color: #fff;
    font-weight: 700;
    font-size: 36px;
`;

export const Block_23_grids = styled.div`
    padding: 4em 0 0;
    display: grid;
`;

export const Form23 = styled.div`
    background: #fff;
    padding: 35px;
    box-shadow: 0 10px 30px 0 rgba(17, 17, 17, 0.09);
    margin-left: auto;
    max-width: 430px;
    text-align: center;
    border-radius: 4px;
`;

export const Form_input = styled.input`
    font-size: 16px;
    border: none;
    width: 100%;
    padding: 12px 14px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    outline: none;
`;

export const Submit_Button = styled.button`
    width: 100%;
    margin-top: 1em;
    background: #203936;
    padding: 12px 28px;
    color: #fff;
    font-size: 16px;
    border-radius: 4px;
    display: inline-block;
    text-align: center;
    font-weight: 600;
    text-transform: uppercase;
    border: none;
`;