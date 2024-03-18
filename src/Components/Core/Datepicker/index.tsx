import React, {useState, FC} from 'react';
import DatePicker from 'react-native-date-picker';
import {DatePickerProps} from './interfaces';

const Datepicker: FC<DatePickerProps> = ({ }) => {
  const [date, setDate] = useState(new Date());

  return (
    <DatePicker
      modal
      mode="date"
      open={true}
      date={date}
      maximumDate={new Date()}
      onConfirm={date => { }}
      onCancel={() => { }}
    />
  );
};
export {Datepicker};
