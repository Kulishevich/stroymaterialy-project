export const getCategories = async ({
  category,
  perPage,
  lang,
}: {
  category: string;
  perPage: number;
  lang: string;
}) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DOMIX_BASE_URL}/v1/categories/${category}?perPage=${perPage}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": lang,
          // Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
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
