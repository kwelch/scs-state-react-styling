import React from 'react';
import ReactDOM from 'react-dom';
import {css} from 'glamor';
import {Form, Fieldset, Legend, SubmitButton} from './styles';
import Input from './Input.js';
const styles = {};

css.global('body', {
  backgroundColor: '#305a79',
  fontFamily: 'Arial, sans-serif'
});

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      comments: '',
      errors: {
        name:'',
        comments:''
      }
    };
  }
  render() {
    const {errors} = this.state;
    return (<Form method="post">
        <Fieldset>
          {/* TODO: Show error summary section */}
          <Legend>Contact Us</Legend>
          <Input
            label="Name"
            isRequired
            placeholder="John Doe"
            value={this.state.name}
            error={errors.name}
          />
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.state.phone}
            error={errors.phone}
          />
          <Input
            label="Email"
            placeholder="example@email.com"
            value={this.state.email}
            error={errors.email}
          />
          <Input
            label="Comments"
            isRequired
            multiline
            value={this.state.comments}
            error={errors.comments}
          />
          <SubmitButton>Submit</SubmitButton>
        </Fieldset>
      </Form>);
  }
}

ReactDOM.render(<ContactForm />, document.body);