export const getProductsList = async ({
  id,
  perPage,
  page,
  lang,
}: {
  id: string;
  perPage: number;
  page: number;
  lang: string;
}) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DOMIX_BASE_URL}/v1/categories/${id}/products?perPage=${perPage}&page=${page}`,
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
