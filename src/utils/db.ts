const backendUrl = process.env.BACKEND;

export const postRequest = async (
  endpoint: string,
  params: any,
  token?: string | null
) => {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const res = await fetch(`${backendUrl}/${endpoint}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(params),
      cache: "no-store",
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

export const getRequest = async (endpoint: string, token?: string | null) => {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const res = await fetch(`${backendUrl}/${endpoint}`, {
      method: "GET",
      headers: headers,
      cache: "no-store",
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
