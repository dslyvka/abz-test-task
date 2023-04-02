// Function for fetching positions from API
export const getPositions = async () => {
  const URL =
    "https://frontend-test-assignment-api.abz.agency/api/v1/positions";

  try {
    const res = await fetch(URL);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
