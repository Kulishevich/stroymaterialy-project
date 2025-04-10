import { Region } from "@/api/regions/regions.types";

export const getRegions = async ({
  lang,
  token,
}: {
  lang: string;
  token?: string;
}): Promise<Region[] | null> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/regions`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": lang,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }

    const { data } = await response.json();

    return data;
  } catch (error) {
    console.error("Ошибка загрузки данных Регионов:", error);
    return null;
  }
};
