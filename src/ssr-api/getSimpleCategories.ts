export const getSimpleCategories = async ({ lang }: { lang: string }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DOMIX_BASE_URL}/v1/categories/simple`,
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
