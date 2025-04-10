export const getProductsList = async ({
  id,
  perPage,
  page,
  lang,
  token,
}: {
  id: string;
  perPage: number;
  page: number;
  lang: string;
  token?: string;
}) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}/products?perPage=${perPage}&page=${page}`,
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
    console.error("Ошибка загрузки данных ProductList:", error);
    return null;
  }
};
