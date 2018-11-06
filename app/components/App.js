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
      posts: null
    }
    this.openForm = this.openForm.bind(this);
  }
  openForm () {
    this.setState ( function() {
      return {
        makingPost: true
      }
    })
  }

  render () {
    return (
      <div className = 'container'>
        < Header />
        < NewPostBtn 
          makePost = {this.openForm} />
        {this.state.makingPost && 
          <NewPostForm />}

      </div>
    )
  }
}




module.exports = App;