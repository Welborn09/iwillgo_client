/*
    CREATED AND WRITTEN BY STEVE WELBORN
*/
import styled from 'styled-components';

export const SignUpFormContainer = styled.section`
  padding: 50px 20px;
  text-align: center;
  background: #203936;
  color: #B8E648;
`;

export const MainDiv = styled.div`
    height: 100%;
`;

export const PanelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    min-height: 100%;
    margin: 0px auto;
`;

export const LeftPanel = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: calc(50%);
    min-height: 100%;
    min-width: 720px;
`;

export const LeftSubDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 520px;
    min-width: 520px;
    max-width: 520px;
    margin: 64px 100px;
    min-height: calc(100% - 128px);
`;

export const HeaderDiv = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 32px;
`;

export const HeaderPic = styled.img`
    height: 25px;
    border-style: none;
    vertical-align: middle;    
    width: 200px;
    height: auto;
`;

export const HeaderText = styled.label`
     height: 25px;
     border-style: none;
     vertical-align: middle;
`;

export const ProfileDiv = styled.div`
    z-index: 2;
    width: 100%;
`;

export const ProfileHeaderH2 = styled.h2`
    margin-bottom: 24px;
    text-align: center;
    font-size: 24px;
    line-height: 28px;
`;

export const ProfileDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AlreadyMemberDiv = styled.div`

`;

export const ProfileFirstLast = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    width: calc(100% + 24px);
    margin: -12px -12px 12px;
`;

export const ProfileInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(50% - 24px);
    margin: 12px;
`;

export const InputPanel = styled.div`
    width: auto;
`;

export const InputH5 = styled.h5`
    display: block;
    padding: 0px;
    margin: 0px 0px 8px;
    font-size: 14px;
    line-height: 18px;
    float: left;
`;

export const InputDiv = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    height: 48px;
    background: transparent;
    border: 1px solid rgb(163, 166, 172);
    border-radius: 6px;
    cursor: default;
    padding: 11px 16px;
    transition: all 0.25s ease-out 0s;
`;

export const EmailPanel = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 24px;
`;

export const EmailContainer = styled.div`
    width: auto;
`;

export const Input = styled.input`
    flex: 1 1 0%;
    font-size: 16px;
    line-height: 24px;
    border: none;
    background: none;
    padding: 0px;
    border-radius: 0px;
    width: 100%;
    outline: none;
    color: #fff;
`;

export const CheckboxInput = styled.input`
    border: 0px;
    height: 0px;
    overflow: hidden;
    visibility: hidden;
    padding: 0px;
    position: absolute;
    white-space: nowrap;
    width: 0px;
`;

export const PasswordPanel = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    width: calc(100% + 24px);
    margin: -12px -12px 12px;
`;

export const PasswordViewer = styled.div`
    display: block;
    position: relative;
    cursor: pointer;
    margin-left: 8px;
`;

export const DivShadow = styled.div`
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin: 0px;
    display: flex;
    z-index: 99;
    position: relative;
    max-width: 100%;
`;

export const ConfirmPanel = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 24px;
`;

export const ConfirmContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const ConfirmCheckbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    min-width: 18px;
    min-height: 18px;
    transition: all 150ms ease 0s;
    border-radius: 5px;
    border-style: solid;
    border-width: 2px;
    border-color: rgb(163, 166, 172);
    background: white;
    cursor: pointer;
`;

export const ConfirmLabel = styled.label`
    font-family: POINT-Book;
    font-size: 14px;
    line-height: 18px;
    margin-left: 8px;
`;

export const ConfirmLabelDiv = styled.div`
    font-size: 16px;
    line-height: 24px;
`;

export const ContinueButtonPanel = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
    width: 100%;
    gap: 16px;
`;

export const ContinueButton = styled.button`
    padding: 12px 24px;
    font-size: 16px;
    line-height: 22px;
    border-radius: 6px;
    height: 48px;
    max-height: 48px;
    box-sizing: border-box;
    width: 100% !important;
    max-width: 100% !important;
    display: inline-flex;
    position: relative;
    place-content: center;
    align-items: center;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    border: 1px solid rgb(246, 146, 30);
    font-family: POINT-Medium;
    transition: all 0.25s ease-out 0s;
    min-width: max-content;
    background-clip: padding-box;
    fill: rgb(255, 255, 255);
    box-shadow: none;
    background-color: rgb(246, 146, 30);
`;

export const RightPanel = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(50%);
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
    background-color: rgb(246, 239, 232);
    background-image: url(https://dash.pointapp.org/static/media/causes2x.010adc0….png);
    background-position: calc(50%) center;
    background-size: 200%;
    background-repeat: no-repeat;
    overflow: hidden;
`;