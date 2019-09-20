import React from 'react';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={() => {console.log(this.state)}}>
        <div className="half" id="left">
          <input
            onChange={this.handleInputChange}
            placeholder="Name"
            value={this.state.name}
            name="name"
            />
          <input
            type="email"
            onChange={this.handleInputChange}
            placeholder="E-Mail"
            value={this.state.email}
            name="email"
            />
          <button type="submit">Submit</button>
        </div>

        <div className="half">
          <input
            onChange={this.handleInputChange}
            placeholder="Subject"
            value={this.state.subject}
            name="subject"
          />
          <textarea
            onChange={this.handleInputChange}
            placeholder="Lorem ipsum dolor sit..."
            value={this.state.message}
            name="message"
            rows="5"

          />
        </div>
      </form>
    )
  }
}
export default Form;
