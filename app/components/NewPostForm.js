const React = require ('react');
const PropTypes = require ('prop-types');

class NewPostForm extends React.Component {
  constructor (props) {
      super(props);

      this.state = {
        title: ''
      }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    const id = target.id;
    this.setState(
       {title: value}
    )
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.export(this.state.title);
    this.setState({ title: ''})
  }
  
  // {() => this.prop.func()}
  render() {
    return (
      <div className="form">
      <form onSubmit = {this.handleSubmit}>

        <label className="label">Title</label>
        <div className="control">
          <input 
          className="input" 
          id={this.props.id} 
          type="text" 
          name="title" 
          value={this.state.title} 
          onChange={this.handleInput}/>
        </div>

        <label className="label">Body</label>
        <div className="control">
          <input 
          className="input" 
          id={this.props.id} 
          type="text" 
          name="body" 
          value={this.state.body} 
          onChange={this.handleInput}/>
        </div>

        <input type="submit" value="Submit" />
        

      </form>
      </div> 


    );
  }
}

module.exports = NewPostForm;