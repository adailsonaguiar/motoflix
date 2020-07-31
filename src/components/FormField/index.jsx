import React from 'react';

const FormField = ({
  label, name, value, onChange, type,
}) => (
  <div>
    <label>
      {label}
      :
      <input type={type} name={name} value={value} onChange={onChange} />
    </label>
  </div>
);
export default FormField;
