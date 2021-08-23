import React,{Component} from 'react';

class InputTodo extends Component {
    state = {
        fName: "",
        lastName: "",
        title: "",
      }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
          })
      };
      handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.title);
        if(this.state.title.trim())
        {
        this.props.addTodoProps(this.state.title);
        this.setState({
            title: ""
        });
    }
    else {
        alert("Please type item")
      }
      };
render () {
    return (
        <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={this.state.title}
          name="title"
          onChange={this.onChange}
        />
        <button className="input-submit">Submit</button>
      </form>
      )
}
}

export default InputTodo