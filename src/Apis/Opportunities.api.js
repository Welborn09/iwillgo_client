import axios from 'axios';

const GetOpportunitiesSource = 'https://localhost:7271/api/opportunities';

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
