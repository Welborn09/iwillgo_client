/*
    CREATED AND WRITTEN BY STEVE WELBORN
*/
import axios from 'axios';


//const GetMembersSource = 'https://localhost:7271/api/member';
const SaveMembersSource = 'https://localhost:7271/api/member/SaveMember';


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