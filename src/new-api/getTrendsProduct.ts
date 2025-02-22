export const getTrendsProduct = async ({
  trend,
  perPage,
}: {
  trend: string;
  perPage: number;
}) => {
  try {
    const response = await fetch(
      `http://api.domix.am/v1/products/trends/${trend}?perPage=${perPage}`
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
