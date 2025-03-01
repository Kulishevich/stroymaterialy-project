export const getSpheres = async ({ lang }: { lang: string }) => {
  try {
    const response = await fetch(`http://api.domix.am/v1/spheres`, {
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
