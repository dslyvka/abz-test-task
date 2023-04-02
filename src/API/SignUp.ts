// Function user registration
export const signUp = async (token: string, body: FormData) => {
  const URL = "https://frontend-test-assignment-api.abz.agency/api/v1/users";
  try {
    const res = await fetch(URL, {
      method: "POST",
      body,
      headers: { Token: token },
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
