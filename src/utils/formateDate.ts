export const formatDate = (date: string) => {
  const dateObj = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(
    dateObj,
  );
  return formattedDate;
};
