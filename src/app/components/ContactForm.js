import { Component } from 'react';

class ContactForm extends Component {
  // Setting the component's initial state
  state = {
    name: '',
    email: '',
    message: '',
  };

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const errorEl = document.getElementById('formError');
    const successEl = document.getElementById('formSuccess');

    if (
      this.state.name.trim().length === 0 ||
      this.state.email.trim().length === 0 ||
      this.state.message.trim().length === 0
    ) {
      successEl.classList.add('d-none');
      errorEl.classList.remove('d-none');
      setTimeout(() => {
        errorEl.classList.add('d-none');
      }, 3000);
    } else {
      successEl.classList.remove('d-none');
      errorEl.classList.add('d-none');
      setTimeout(() => {
        successEl.classList.add('d-none');
      }, 3000);
    }

    this.setState({
      name: '',
      email: '',
      message: '',
    });
  };

  render() {
    return (
      <div className='col-md-6'>
        <form>
          <div className='form-group'>
            <label htmlFor='name' className='sr-only'>
              Name
            </label>
            <input
              value={this.state.name}
              name='name'
              type='text'
              className='form-control'
              id='name'
              placeholder='Name'
              required
              onChange={this.handleInputChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email' className='sr-only'>
              Email address
            </label>
            <input
              value={this.state.email}
              name='email'
              type='email'
              className='form-control'
              id='email'
              placeholder='Email'
              required
              onChange={this.handleInputChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='message' className='sr-only'>
              Message
            </label>
            <textarea
              value={this.state.message}
              name='message'
              className='form-control'
              id='message'
              rows='3'
              required
              onChange={this.handleInputChange}></textarea>
          </div>
          <div id='formError' className='alert alert-danger d-none' role='alert'>
            Please complete all the fields!!
          </div>
          <div id='formSuccess' className='alert alert-success d-none' role='alert'>
            Message sent!
          </div>
          <button
            type='submit'
            className='btn custom-button text-uppercase'
            onClick={this.handleFormSubmit}>
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
