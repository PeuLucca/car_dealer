const BASE_URL = 'http://localhost:5000/';

// Login
export const getAuth = async (user) => {
  try {
    const response = await fetch(`${BASE_URL}login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const res = await response.json();
    return res;

  } catch (error) {
    console.error('Authentication error:', error.message);
    throw error;
  }
};

// Cars
export const getCars = async () => {
  const response = await fetch(`${BASE_URL}cars`);
  return await response.json();
};

// Reviews
export const getReviews = async () => {
    const response = await fetch(`${BASE_URL}purchases`);
    return await response.json();
  };