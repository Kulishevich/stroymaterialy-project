export const getContent = async ({
  key,
  lang,
  token,
}: {
  key: string;
  lang: string;
  token?: string;
}) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/contents?keys[]=${key}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": lang,
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }

    return await response.json();
  } catch (error) {
    console.error("Ошибка загрузки данных Контента:", error);
    return null;
  }
};

export const getAllContent = async ({ lang }: { lang: string }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/contents`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": lang,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }

    return await response.json();
  } catch (error) {
    console.error("Ошибка загрузки данных Контента:", error);
    return null;
  }
};
