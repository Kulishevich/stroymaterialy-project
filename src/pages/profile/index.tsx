import { ProfilePage } from "@/features/Profile/profile-page";

// import { GetServerSideProps } from "next";

// type ProfileProps = {
//   userData: any;
// };

const Page = () => {
  return <ProfilePage />;
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const token = "429|TIvogqWo5BP6O2zCZXGzLCbBBgg4fLc4uC5rJH2n637c547e"; // Берем токен из куки
//   if (!token) {
//     return {
//       redirect: {
//         destination: "/home", // Если нет токена, кидаем на логин
//         permanent: false,
//       },
//     };
//   }

//   try {
//     const response = await fetch("http://api.domix.am/v1/users/settings", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     if (!response.ok) {
//       throw new Error("Ошибка запроса");
//     }

//     const userData = await response.json();
//     return {
//       props: { userData },
//     };
//   } catch (error) {
//     console.error("Ошибка загрузки данных профиля:", error);

//     return {
//       props: { userData: null }, // Передаем null, если ошибка
//     };
//   }
// };

export default Page;
