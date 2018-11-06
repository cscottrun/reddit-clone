const React = require ('react');
const PropTypes = require ('prop-types');
const NewPostForm = require ('./NewPostForm');


//actual header
function Header () {
  return (
    <div className = 'header'>
      <h1>Reddit Clone</h1>
    </div>
  )
}

function NewPostBtn (props) {
  return (
    <button 
      className='newPostButn'
      onClick = {props.makePost}>
      New post
    </button>
  )
}


//filter input box
//sort by votes 
//new post button

class App extends React.Component {
  constructor (props) {
    super (props) 

    this.state = {
      makingPost: false,
      postCounter: 1,
      posts: ''
    }
    this.openForm = this.openForm.bind(this);
    this.handleStartNewPost = this.handleStartNewPost.bind(this);
  }
  openForm () {
    this.setState ( function() {
      return {
        makingPost: true
      }
    })
  }
  handleStartNewPost(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    let num = target.id;
    let title = (name === 'title' && value);    
    this.setState({
        posts: {[num]: {title: value}}
    })
  }

  handleBuildPost(e) {
    let body = (e.target.name === 'body' && value);
    this.setState ({

    })
  }
  

  render () {
    return (
      <div className = 'container'>
        < Header />
        < NewPostBtn 
          makePost = {this.openForm} />
        {this.state.makingPost && 
          <NewPostForm
          startNewPost = {this.handleStartNewPost}
          buildPost = {this.handleBuildPost}
          id = {this.state.postCounter}
          
          />}

      </div>
    )
  }
}




module.exports = App;