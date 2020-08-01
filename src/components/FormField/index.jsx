/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const FormField = ({ label, name, value, onChange, type }) => {
  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';
  return (
    <S.FormFieldWrapper>
      <S.Label>
        <S.InputText
          as={tag}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
        <S.Label.Text>{label}</S.Label.Text>
      </S.Label>
    </S.FormFieldWrapper>
  );
};

FormField.defaultProps = {
  type: 'text',
  value: '',
};
FormField.protoTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};
export default FormField;
