import {useState} from 'react';

const useDropDown = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (option: any) => {
    setValue(option);
  };

  return {
    value,
    onChange: handleChange,
  };
};

export {useDropDown};
