// Function for fetching users from API
export const getUsers = async (url: string) => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
