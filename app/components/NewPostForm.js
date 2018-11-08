const React = require ('react');
const PropTypes = require ('prop-types');

class NewPostForm extends React.Component {
  constructor (props) {
      super(props);

      this.state = {
          title: '',
          body: '',
          author: '',
          img: '',
          touched: {
            title: '',
            body: '',
            author: '',
            img: '',
          }
      }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.markError = this.markError.bind(this)
    }

  
  handleBlur (e) {
    const name = e.target.name;
    this.setState ((prevstate) => {
      prevstate.touched[name] = true;
    })
  }
  
  markError(e) {
    const name = e;
    if (
      // this.state[field].length < 1 && 
      this.state.touched[name] === true) {
      return true;
    }
  };

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
    this.setState({ 
      title: '', 
      body: '',
      author: '',
      img: ''
    })
  }
  
  render() {

    return (
      <div className="form">
      <form onSubmit = {this.handleSubmit}>

        <label className="label">Title</label>
        <div className="control">
          <input
          onBlur={this.handleBlur} 
          className={this.markError('title') ? 'error' : '' }
          type="text" 
          name="title" 
          value={this.state.title} 
          onChange={this.handleInput}/>
        </div>

        <label className="label">Body</label>
        <div className="control">
          <textarea 
          onBlur={this.handleBlur} 
          type="text" 
          name="body" 
          value={this.state.body} 
          onChange={this.handleInput}/>
        </div>

        <label className="label">Author</label>
        <div className="control">
          <input 
          onBlur={this.handleBlur} 
          type="text" 
          name="author" 
          value={this.state.author} 
          onChange={this.handleInput}/>
        </div>

        <label className="label">Image Url</label>
        <div className="control">
          <input 
          onBlur={this.handleBlur} 
          type="text" 
          name="img" 
          value={this.state.img} 
          onChange={this.handleInput}/>
        </div>
        
        
        <div className="control">
        <input className = 'createpost' type="submit" value="Create Post" />
        </div>

      </form>
      </div> 


    );
  }
}

module.exports = NewPostForm;