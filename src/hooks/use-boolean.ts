import { useState } from 'react';

// ----------------------------------------------------------------------

export function useBoolean(defaultValue: boolean = false) {
  const [value, setValue] = useState(!!defaultValue);

  const onTrue = () => {
    setValue(true);
  };

  const onFalse = () => {
    setValue(false);
  };

  const onToggle = () => {
    setValue((prev) => !prev);
  };

  return {
    value,
    onTrue,
    onFalse,
    onToggle,
    setValue,
  };
}
