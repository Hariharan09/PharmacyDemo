import {useState} from 'react';

const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (text: string) => {
    setValue(text);
  };

  const set = (text: string) => {
    setValue(text);
  };

  return {
    value,
    onChange: handleChange,
    set,
  };
};

export {useInput};
