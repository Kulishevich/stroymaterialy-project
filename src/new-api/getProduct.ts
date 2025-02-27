export const getProduct = async (product: string) => {
  try {
    const response = await fetch(`http://api.domix.am/v1/products/${product}`);

    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }

    return await response.json();
  } catch (error) {
    console.error("Ошибка загрузки данных категории:", error);
    return null;
  }
};
