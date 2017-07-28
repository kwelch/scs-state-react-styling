import React from 'react';
import glamorous from 'glamorous';
const {Span} = glamorous;

const cleanName = (name) => name.trim().replace(' ', '-').toLowerCase();

const TextArea = ({
  label,
  value,
  onChange,
  className
}) => (<textarea
         name={name}
         onChange={onChange}
         className={className}
       >
    {value}
  </textarea>);

const Input = ({
  type="text",
  label,
  value,
  onChange,
  className
}) => (<input
      type="text"
      placeholder={label}
      name={cleanName(label)}
      value={value}
      onChange={onChange}
      className={className}
    />);

const InputStyled = glamorous(Input)({
  border: '1px solid #afafaf',
  padding: '.2rem',
  boxShadow: '.2rem .2rem .5rem rgba(0,0,0,0.1)'
});

const TextAreaStyled = glamorous(TextArea)({
  border: '1px solid #afafaf',
  padding: '.2rem',
  boxShadow: '.2rem .2rem .5rem rgba(0,0,0,0.1)',
  minHeight: '4rem'
});

const TextInput = ({
  label,
  isRequired,
  multiline = false,
  error,
  className,
  ...props
}) => {
  const inputProps = {label, ...props};
  return (<label className={className}>
    <Span width="150px">
      {label}:
      {isRequired && <Span fontSize='.8rem' color='red'>*</Span>}
    </Span>
    {!multiline
        ? <InputStyled {...inputProps} />
        : <TextAreaStyled {...inputProps} />
    }
  </label>);
};

const TextInputStyled = glamorous(TextInput)({
  display: 'flex',
  padding: '.5rem',
}, ({error, multiline}) => ({
  '& textarea': {
    border: error && '2px solid red'
  },
  '& input': {
    borderBottom: error && '2px solid red'
  },
  flexDirection: (multiline ? 'column': 'row')
}));

export default TextInputStyled;