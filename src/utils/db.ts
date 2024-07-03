const backendUrl = process.env.BACKEND;

export const postRequest = async (endpoint: string, params: any) => {
  try {
    const res = await fetch(`${backendUrl}/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(errorMessage || "Failed to fetch");
    }

    const data = await res.json();

    return data;
  } catch (error: any) {
    return { error: error.message || "Unknown error occurred" };
  }
};

export const getRequest = async (endpoint: string) => {
  try {
    const res = await fetch(`${backendUrl}/${endpoint}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(errorMessage || "Failed to fetch");
    }

    const data = await res.json();

    return data;
  } catch (error: any) {
    return { error: error.message || "Unknown error occurred" };
  }
};
