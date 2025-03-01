export const getContent = async ({
  key,
  lang,
}: {
  key: string;
  lang: string;
}) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DOMIX_BASE_URL}/v1/contents?keys[]=${key}`,
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
    console.error("Ошибка загрузки данных категории:", error);
    return null;
  }
};

export const getAllContent = async ({ lang }: { lang: string }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DOMIX_BASE_URL}/v1/contents`,
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
    console.error("Ошибка загрузки данных категории:", error);
    return null;
  }
};
