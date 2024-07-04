/*
    CREATED AND WRITTEN BY STEVE WELBORN
*/
import React, { useState } from 'react';
import { Form } from '../styles/StyledComponents';
import { SignUpFormContainer, MainDiv, PanelContainer, LeftPanel, LeftSubDiv,
         HeaderDiv, ProfileDiv, ProfileDetails, ProfileFirstLast, ProfileHeaderH2,
         ProfileInputContainer, PasswordPanel, PasswordViewer,
         ConfirmCheckbox, ConfirmContainer, ConfirmPanel, ConfirmLabel,
         ConfirmLabelDiv, ContinueButton, ContinueButtonPanel, EmailContainer, EmailPanel,
         RightPanel, InputDiv, InputH5, InputPanel, DivShadow, Input, CheckboxInput,
         HeaderPic,
         AlreadyMemberDiv
        } from './../styles/signUpForm.styles';
import PasswordInputIcon from './PasswordInputIcon';
import Logo from './../assets/images/logo_v2.jpg'
import { Member } from './../models/member.model.js'
import { saveMember } from '../Apis/Member.api.js';


const SignUpForm = () => {
 const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    confirm: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log(formData);
    var m = new Member();
    m.firstname = formData.firstname;
    m.lastname = formData.lastname;
    m.email = formData.email;
    m.password = formData.password;
    m.confirm = true;

    saveMember(m)
        .then(() => {
            //if successful we move to login page
        });
  };

  return (
    <SignUpFormContainer>
        <MainDiv>
            <PanelContainer>
                <LeftPanel>
                    <LeftSubDiv>
                        <HeaderDiv>
                           <a href='/'><HeaderPic src={Logo} /></a>
                        </HeaderDiv>
                        <ProfileDiv>
                            <ProfileHeaderH2>Create your personal account</ProfileHeaderH2>
                            <ProfileDetails>
                                <Form onSubmit={submit}>
                                    <ProfileFirstLast>
                                        <ProfileInputContainer>
                                            <InputPanel>
                                                <InputH5>First Name</InputH5>
                                                <InputDiv>
                                                    <Input
                                                        name="firstname"
                                                        placeholder="First Name"
                                                        value={formData.firstname}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </InputDiv>
                                            </InputPanel>
                                        </ProfileInputContainer>
                                        <ProfileInputContainer>
                                            <InputPanel>
                                                <InputH5>Last Name</InputH5>
                                                <InputDiv>
                                                    <Input
                                                        name="lastname"
                                                        placeholder="Last Name"
                                                        value={formData.lastname}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </InputDiv>
                                            </InputPanel>
                                        </ProfileInputContainer>
                                    </ProfileFirstLast>
                                    <EmailPanel>
                                        <EmailContainer>
                                            <InputH5>Email Address</InputH5>                                            
                                            <InputDiv>
                                                <Input
                                                    name='email'
                                                    placeholder='Email Address'
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required />
                                            </InputDiv>
                                        </EmailContainer>
                                    </EmailPanel>
                                    <PasswordPanel>
                                        <ProfileInputContainer>
                                            <InputPanel>
                                                <InputH5>Password</InputH5>
                                                <InputDiv>
                                                    <Input
                                                        name="password" 
                                                        autoComplete="off" 
                                                        type="password" 
                                                        label="Password" 
                                                        placeholder="Enter your password" 
                                                        maxLength=""
                                                        onChange={handleChange}
                                                        value={formData.password} />
                                                    <PasswordViewer>
                                                        <PasswordInputIcon></PasswordInputIcon>
                                                    </PasswordViewer>
                                                </InputDiv>
                                                <DivShadow></DivShadow>
                                            </InputPanel>
                                        </ProfileInputContainer>
                                        <ProfileInputContainer>
                                            <InputPanel>
                                                <InputH5>Confirm Password</InputH5>
                                                <InputDiv>
                                                    <Input
                                                        name="password" 
                                                        autoComplete="off" 
                                                        type="password" 
                                                        label="Confirm Password" 
                                                        placeholder="Confirm password" 
                                                        onChange={handleChange}
                                                        maxLength=""
                                                        value={formData.confirmPassword} />
                                                    <PasswordViewer>
                                                        <PasswordInputIcon></PasswordInputIcon>
                                                    </PasswordViewer>
                                                </InputDiv>
                                                <DivShadow></DivShadow>
                                            </InputPanel>
                                        </ProfileInputContainer>
                                    </PasswordPanel>
                                    <ConfirmPanel>
                                        <ConfirmContainer>
                                            <CheckboxInput
                                                name='terms'
                                                value={formData.confirm}
                                                onChange={handleChange}
                                            />
                                            <ConfirmCheckbox></ConfirmCheckbox>
                                            <ConfirmLabel>
                                            <ConfirmLabelDiv>
                                                By continuing, you agree to that you are at least 13 years old. Plus, you agree to all this legal stuff: 
                                                <a href="https://pointapp.org/terms-of-use" target="_blank">Terms of Use</a>, 
                                                <a href="https://pointapp.org/community-guidelines" target="_blank">Community Guidelines</a> 
                                                and <a href="https://pointapp.org/privacy-policy" target="_blank">Privacy Policy</a>
                                            </ConfirmLabelDiv>
                                                </ConfirmLabel>
                                            </ConfirmContainer>
                                    </ConfirmPanel>
                                    <ContinueButtonPanel>
                                        <ContinueButton type='Submit'>Continue</ContinueButton>
                                    </ContinueButtonPanel>                                    
                                </Form>
                            </ProfileDetails>
                            <AlreadyMemberDiv>
                                Already a member? Click <a href='/login'>Here</a>
                            </AlreadyMemberDiv>
                        </ProfileDiv>
                    </LeftSubDiv>
                </LeftPanel>
                <RightPanel></RightPanel>
            </PanelContainer>
        </MainDiv>
    </SignUpFormContainer>    
  );
};

export default SignUpForm;
