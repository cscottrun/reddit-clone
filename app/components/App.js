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
    this.import = this.import.bind(this);
    
  }
  openForm () {
    this.setState ( 
        {makingPost: true}
    )
  }

  import(data) {
    let id = this.state.postCounter;
    this.setState ({
      posts: {[id]: {
        title: data.title, 
        body: data.body,
        author: data.author,
        img: data.img,
        votes: null
        }
      },
      makingPost: false,
      //dont forget to increment post counter
    })
  }

  render () {
    return (
      <div className = 'container'>
        < Header />
        < NewPostBtn 
          makePost = {this.openForm} />
        
        {this.state.makingPost && 
        < NewPostForm
          id = {this.postCounter}
          export = {this.import}
          />}

      </div>
    )
  }
}




module.exports = App;