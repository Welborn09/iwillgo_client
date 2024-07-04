/*
    CREATED AND WRITTEN BY STEVE WELBORN
*/
import axios from 'axios';

const GetOpportunitiesSource = 'https://localhost:7271/api/opportunities';
const GetOpportunityByIdSource = 'https://localhost:7271/api/opportunities/getByEventId/{eventId}';

export const fetchOpportunities = async () => {
  try {
    const response = await axios.get(GetOpportunitiesSource);
    console.log('*** opportunities response ***', response);
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error("There was an error fetching the opportunities!", error);
    throw [];
  }
};

export const fetchOpportunity = async (eventId) => {
  try {
    const response = await axios.get(GetOpportunityByIdSource.replace('{eventId', eventId));
    console.log('*** opportunity response ***', response);
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error("There was an error fetching the opportunity!", error);
    throw [];
  }
};
