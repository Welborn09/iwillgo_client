/*
    CREATED AND WRITTEN BY STEVE WELBORN
*/
import axios from 'axios';
import { getToken } from '../services/token.service';

const GetOpportunitiesSource = 'https://localhost:7271/api/opportunities';
const GetOpportunityByIdSource = 'https://localhost:7271/api/opportunities/event/{eventId}';

export const fetchOpportunities = async () => {
  try {
    const response = await axios.get(GetOpportunitiesSource,  
              { headers: { 'Authorization': 'Bearer ' + getToken() } } );
    console.log('*** opportunities response ***', response);
    return Array.isArray(response.data.items) ? response.data.items : [];
  } catch (error) {
    console.error("There was an error fetching the opportunities!", error);
    throw [];
  }
};

export const fetchOpportunity = async (eventId) => {
  try {
    const response = await axios.get(GetOpportunityByIdSource.replace('{eventId', eventId),  
    { headers: { 'Authorization': 'Bearer ' + getToken() } } );
    console.log('*** opportunity response ***', response);
    return  response.data;
  } catch (error) {
    console.error("There was an error fetching the opportunity!", error);
    throw [];
  }
};
