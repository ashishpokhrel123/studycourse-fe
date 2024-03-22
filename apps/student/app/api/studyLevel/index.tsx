import axios from 'axios';

const API_URL: any = 'http://localhost:3001/api/studyLevel/all';

/**
 * Fetches study levels from the API.
 * @returns {Promise<any>} A promise resolving to the fetched data or an error.
 */
export const fetchStudyLevels = async () => {
  try {
    const response = await axios.get(
      `http://localhost:3001/api/studyLevel/all`
    );
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch study levels:', error);
    throw new Error('Failed to fetch study levels');
  }
};

/**
 * Fetches study level by slug from the API.
 * @param {string} slug The slug of the study level to fetch.
 * @returns {Promise<any>} A promise resolving to the fetched data or an error.
 */
export const fetchStudyLevelBySlug = async (slug: string) => {
  try {
    const response = await axios.get(`${API_URL}/${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch study level by slug "${slug}":`, error);
    throw new Error(`Failed to fetch study level by slug "${slug}"`);
  }
};
