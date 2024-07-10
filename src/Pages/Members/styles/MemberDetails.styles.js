/*
    CREATED AND WRITTEN BY STEVE WELBORN
*/
import styled from 'styled-components';
import './Modal.styles.css';

export const MemberDetailsContainer = styled.div.attrs({
    className: 'container modal-adjust'
})``;

export const MemberDetailsHeader = styled.div`
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: repeat(2, 50%);
`;

export const MemberDetailsTitleDiv = styled.div`

`;
export const MemberDetailsTitle = styled.h1.attrs({
    className: 'my-4'
})`
    margin-top: 0;
`;

export const MemberDetailsCountDiv = styled.div`
    align-content: center;
`;

export const MemberDetailsRow = styled.div.attrs({
    className: 'row'
})``;

export const MemberDetailsLeftPanel = styled.div.attrs({
    className: 'col-md-8'
})``;

export const MemberDetailsLeftImage = styled.img.attrs({
    className: 'img-fluid'
})``;

export const MemberDetailCountSection = styled.div.attrs({
    className: 'd-flex justify-content-center mb-2'
})`
    float: right;
`;

export const MemberDetailCountButtons = styled.div.attrs({
    
})`    
    display: grid;
    grid-template-columns: repeat(2, 50%);    

    width: 100px;
    height: 2em;
    margin: 2em auto;
    border-radius: 500px;
    background-color: #4d874c;
    color: #fff;
`;

export const MemberDetailsCountText = styled.div`
    align-content: center;
    text-align: start;
    padding-left: 10px;
    font-weight: bold;
    font-style: normal;    
`;

export const MemberDetailCountSpan = styled.div.attrs({
    className: 'small'
})`
    align-self: center;
    align-content: end;
    width: 20px !important;
    height: 20px !important;
    border-radius: 500px;
    background-color: #fff;
    color: #4d874c;
    text-align: center;
    margin-left: auto;
    margin-right: 5px;
    font-weight: bold;
`;

export const MemberDetailsRightPanel = styled.div.attrs({
    className: 'col-md-4'
})``;

export const MemberDetailsH3 = styled.h3.attrs({
    className: 'my-3'
})``;

export const MemberDetailsField = styled.p`
`;