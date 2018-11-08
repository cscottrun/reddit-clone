const React = require ('react');
const PropTypes = require ('prop-types');
const PostList = require ('./PostList');


function sortTopVotes(a,b) {
  if (a.votes > b.votes)
  return -1;
  if (a.votes < b.votes)
  return 1;
  return 0;
}
function sortTitle(a,b) {
  if (a.title < b.title)
  return -1;
  if(a.title > b.title)
  return 1;
  return 0;
}
function sortTime (a,b){
  if (a.timestamp < b.timestamp)
  return -1;
  if(a.timestamp > b.timestamp)
  return 1;
  return 0;
}

function filter (searchterm, searchobject) {
  let filterRegEx = new RegExp(searchterm, 'i')
  return filterRegEx.test(searchobject)
}

class Sort extends React.Component {

  handleSort () {
    if (this.props.sort === 'votes') {
      return sortedPosts = Object.values(this.props.posts).sort(sortTopVotes);
    } else if (this.props.sort === 'title'){
      return sortedPosts = Object.values(this.props.posts).sort(sortTitle);
    } else if (this.props.sort === 'date') {
      return sortedPosts = Object.values(this.props.posts).sort(sortTime);
    }
  }

  
  render() {
    return (

      < PostList 
        sortedPosts = {this.handleSort(this.props)}
        upvote = {this.props.upvote}
        downvote = {this.props.downvote}
        filter = {this.props.filter}
      />
      
    )
  }

}



module.exports = Sort;