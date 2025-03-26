export const getCart = async ({
  lang,
  token,
}: {
  lang: string;
  token?: string;
}) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/carts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": lang,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }

    return await response.json();
  } catch (error) {
    console.error("Ошибка загрузки данных:", error);
    return null;
  }
};
