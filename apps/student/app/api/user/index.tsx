import axios from 'axios';

export const addUserForAppointment = async ({ data }: any) => {
  try {
    const response = await axios.post(
      `http://localhost:3001/api/user/register`,
      data
    );

    return response;
  } catch (error) {
    throw new Error(`Failed to add blog: ${error.message}`);
  }
};
