export const getCategories = async ({
  category,
  perPage,
}: {
  category: string;
  perPage: number;
}) => {
  try {
    const response = await fetch(
      `http://api.domix.am/v1/categories/${category}?perPage=${perPage}`
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
