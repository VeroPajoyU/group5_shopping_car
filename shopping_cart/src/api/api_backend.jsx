const url = "http://localhost:3000";

const fetch_data = async (endpoint, setState) => {
  const result = await fetch(url + endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { data } = await result.json();
  setState(data);
};

export default fetch_data;