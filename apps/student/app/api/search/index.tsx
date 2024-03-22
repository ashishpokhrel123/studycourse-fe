import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const search = async ({
  course,
  level,
  location,
  rankingOrder,
  feesOrder,
  scholarshipOrder,
}: any) => {
  try {
    const response = await axios.post(`${API_URL}/university/search`, {
      course,
      level,
      location,
      rankingOrder,
      feesOrder,
      scholarshipOrder,
    });

    console.log(response, 'response');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch courses:', error);
    throw new Error('Failed to fetch courses');
  }
};
