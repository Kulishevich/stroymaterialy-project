import { ProfilePage } from "@/features/Profile/profile-page";

import { GetServerSideProps } from "next";

type ProfileProps = {
  userData: any; // Здесь лучше типизировать правильно
};

const Page = ({ userData }: ProfileProps) => {
  return <ProfilePage />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = "32|9rMlic0cl74wJvcIATvrjhwtcsYXj0ADjC2GISn340ff95aa"; // Берем токен из куки
  console.log("ssr");
  if (!token) {
    return {
      redirect: {
        destination: "/login", // Если нет токена, кидаем на логин
        permanent: false,
      },
    };
  }

  try {
    const response = await fetch("http://api.domix.am/v1/users/settings", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }

    const userData = await response.json();
    return {
      props: { userData },
    };
  } catch (error) {
    console.error("Ошибка загрузки данных профиля:", error);

    return {
      props: { userData: null }, // Передаем null, если ошибка
    };
  }
};

export default Page;
