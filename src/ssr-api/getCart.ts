export const getCart = async ({ lang }: { lang: string }) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/carts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": lang,
      },
    });

    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }

    return await response.json();
  } catch (error) {
    console.error("Ошибка загрузки данных категории:", error);
    return null;
  }
};
