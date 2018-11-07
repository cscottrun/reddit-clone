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
      postCounter: 2,
      posts: {1: {
        title: 'I heart bananas',
        body: 'bananas are my favorite fruit',
        author: 'Zubair',
        img: 'https://media.licdn.com/dms/image/C4D03AQGDsySczUr_sw/profile-displayphoto-shrink_800_800/0?e=1547078400&v=beta&t=AZozQ7cXLfTayXPXj2IsXMUmYxfSLgkIPJ_XdPIAD3k',
      }}
    }
    this.openForm = this.openForm.bind(this);
    this.import = this.import.bind(this);
    
  }
  openForm () {
    this.setState ( 
        {makingPost: true}
    )
  }
  //this is my attempt to use prevstate
  import(data) {
    let newPost = {
      title: data.title, 
      body: data.body,
      author: data.author,
      img: data.img,
      votes: null
    }
    let id = this.state.postCounter;
    this.setState( (prevstate) => {
      prevstate.posts[id] = newPost;
      prevstate.postCounter = prevstate.postCounter + 1;
      prevstate.makingPost = false;
      return prevstate;
    })
  }

  // // this one works, but overwrites state. need to add to old
  // import(data) {
  //   let id = this.state.postCounter;
  //   this.setState ({
  //     posts: {[id]: {
  //       title: data.title, 
  //       body: data.body,
  //       author: data.author,
  //       img: data.img,
  //       votes: null
  //       }
  //     },
  //     makingPost: false,
  //     //dont forget to increment post counter
  //   })
  // }

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