const React = require ('react');
const PropTypes = require ('prop-types');

class NewPostForm extends React.Component {
  constructor (props) {
      super(props);

      this.state = {
          title: '',
          body: '',
          author: '',
          img: ''
        
      }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState(
       {[name]:value},
    )
  }
  handleSubmit(e) {
    e.preventDefault();
    
    this.props.export(this.state);
    //reset this state to blank
    this.setState({ 
      title: '', 
      body: '',
      author: '',
      img: ''
    })
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
          type="text" 
          name="title" 
          value={this.state.title} 
          onChange={this.handleInput}/>
        </div>

        <label className="label">Body</label>
        <div className="control">
          <input 
          className="input" 
          type="text" 
          name="body" 
          value={this.state.body} 
          onChange={this.handleInput}/>
        </div>

        <label className="label">Author</label>
        <div className="control">
          <input 
          className="input" 
          type="text" 
          name="author" 
          value={this.state.author} 
          onChange={this.handleInput}/>
        </div>

        <label className="label">Image Url</label>
        <div className="control">
          <input 
          className="input" 
          type="text" 
          name="img" 
          value={this.state.img} 
          onChange={this.handleInput}/>
        </div>

        <input type="submit" value="Submit" />
        

      </form>
      </div> 


    );
  }
}

module.exports = NewPostForm;