import React from 'react';

function RadioButton({ value, ...props }) {
  const id = `variant-${value}`;

  return (
    <label htmlFor={id}>
      <input {...props} id={id} type="radio" name="variant" value={value} />
      {value}
    </label>
  );
}

export default RadioButton;
