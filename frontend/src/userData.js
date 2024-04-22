import axios from "axios";

export const userData = async (id, getReview) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/user/profile/${id}`,
      {
        headers: {
          Authorization: id,
        },
      }
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }

  if (getReview === true) {
    try {
      const response = await axios.get(
        `http://localhost:3001/user/review/${id}`
      );
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
};
