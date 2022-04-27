const useDate = () => {
  const getDateText = (date: number) => {
    const currDate = date * 1000;
    return new Date(currDate).toDateString();
  };

  return { getDateText };
};

export default useDate;
