import axios from 'axios';

const API_URL: any = 'http://localhost:3001/api/destination/all';

export const fetchAllUniversityByDestination = async () => {
  try {
    const response = await axios.get(
      `http://localhost:3001/api/destination/all`
    );
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch university:', error);
    throw new Error('Failed to fetch university');
  }
};
