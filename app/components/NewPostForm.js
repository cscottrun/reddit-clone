const React = require ('react');
const PropTypes = require ('prop-types');


class NewPostForm extends React.Component {
  constructor (props) {
      super(props);
      this.state = {
        
      }
  }
  
  
  
  render() {
    return (

      <div className="form">

        <label className="label">Title</label>
        <div className="control">
          <input className="input" id={this.props.id} type="text" name="title" value={this.props.state} onChange={this.props.startNewPost}/>
        </div>

        <label className="label">Body</label>
        <div className="control">
          <input className="input" number = {this.props.id} type="text" name="body" value={this.props.state} onChange={this.props.buildPost}/>
        </div>

      </div> 

    );
  }
}

module.exports = NewPostForm;