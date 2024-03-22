import axios from 'axios';

export const fetchBlog = async () => {
  try {
    const response = await axios.get(`http://localhost:3001/api/blog/all`);
    return response;
  } catch ({ error }: any) {
    throw new Error(`Failed to fetch blogs: ${error.message}`);
  }
};

export const fetchBlogBySlug = async ({ slug }: any) => {
  try {
    const response = await axios.get(`http://localhost:3001/api/blog/${slug}`);
    return response;
  } catch ({ error }: any) {
    throw new Error(`Failed to fetch blog by id: ${error.message}`);
  }
};
