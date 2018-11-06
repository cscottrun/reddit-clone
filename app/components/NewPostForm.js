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
      this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange (event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
        [name]: value
    });
}
  
  render() {
    return (

      <div className="form">

        <label className="label">Title</label>
        <div className="control">
          <input className="input" type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
        </div>

        <label className="label">Body</label>
        <div className="control">
         <textarea className="textarea" name="body" value={this.state.body} onChange={this.handleChange} />
        </div>

        <label className="label">Author</label>
        <div className="control">
         <input className="input" name="author" value={this.state.author} onChange={this.handleChange} />
        </div>

        <label className="label">Img Url</label>
        <div className="control">
         <input className="input" name="img" value={this.state.img} onChange={this.handleChange} />
        </div>

      </div> 

    );
  }
}

module.exports = NewPostForm;
  
