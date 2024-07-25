/*
    CREATED AND WRITTEN BY STEVE WELBORN
*/
import axios from 'axios';
import { setToken } from '../services/token.service';


//const GetMembersSource = 'https://localhost:7271/api/member';
const SaveMembersSource = 'https://localhost:7271/api/member/SaveMember';
const MemberLoginSource = 'https://localhost:7271/api/member/MemberLogin';


export const saveMember = async (member) => {
    try {
      const response = await axios.post(SaveMembersSource, member.toJSON());
      console.log('*** saveMember response ***', response);
      return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
      console.error("There was an error saving the Member!", error);
      throw [];
    }
  };

  export const Login = async (email, password) => {
    try {
      var login = { email: email, password: password };
      const response = await axios.post(MemberLoginSource, login);
      console.log('*** Login response ***', response);
      console.log('*** Login response.data ***', response.data);
      if (response.data.token) {
        setToken(response.data.token);
        //localStorage.setItem('token', response.data.token);
      }
      return response;
    } catch (error) {
      console.error("There was an error logging the Member In!", error);
      throw [];
    }
  };