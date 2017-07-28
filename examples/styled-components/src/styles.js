import glamorous from 'glamorous';

export const Form = glamorous.form({
  width: '300px',
  margin: 'auto'
});

export const Fieldset = glamorous.fieldset({
  backgroundColor: 'white',
  border: '1px solid #004070'
});

export const Legend = glamorous.legend({
  color: 'white',
  backgroundColor: '#305a79',
  padding: '0.3rem 1rem',
  border: '1px solid #334070',
  boxShadow: '.2rem .2rem .5rem rgba(0,0,0,0.3)'
});

export const SubmitButton = glamorous.button({
  float: 'right',
  backgroundColor: '#305a79',
  border: '1px solid #334070',
  boxShadow: '.2rem .2rem .5rem rgba(0,0,0,0.3)',
  fontSize: '1.1rem',
  color: 'white',
  margin: '.25rem 0.5rem',
  padding: '.2rem 1rem',
  boxSizing: 'border-box'
});