// Function for getting token from API
export const getToken = async () => {
  const URL = "https://frontend-test-assignment-api.abz.agency/api/v1/token";
  try {
    const res = await fetch(URL);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
