export const useGetNextSevenDays = () => {
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);

    return {
      id: date.toISOString().split("T")[0],
      name: date.toISOString().split("T")[0],
    };
  });
};
