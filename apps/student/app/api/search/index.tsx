import axios from 'axios';

export const search = async ({
  course,
  level,
  location,
  rankingOrder,
  feesOrder,
  scholarshipOrder,
}: any) => {
  try {
    const response = await axios.post(
      `http://localhost:3001/api/university/search`,
      { course, level, location, rankingOrder, feesOrder, scholarshipOrder }
    );

    console.log(response, 'response');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch courses:', error);
    throw new Error('Failed to fetch courses');
  }
};
