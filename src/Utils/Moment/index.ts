import moment from 'moment';

export const getChatTime = (time: any) => {
  return moment(time).format('hh:mm A');
};

export const getMonthName = (date: any) => {
  return moment(date).format('LL');
};

export const getCurrentDay = (dataTime: any) => {
  const findTime = dataTime.substring(9, 11) - new Date().getDate();

  if (findTime === 0) {
    return '';
  } else if (findTime === -1) {
    return 'yesterday';
  } else {
    return dataTime;
  }
};

export const getTime = (time: any) => {
  return moment(time).format('MMMM DD YYYY');
};
