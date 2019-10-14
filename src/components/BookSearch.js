import React from 'react';
// import BookSearchSelector from './BookSearchSelector';

class BookSearch extends React.Component { 
  
    searchTermHandle = (e) => {
      e.preventDefdault()
      this.props.searchBooks(e.target.search_input.value)
    }
  
    render() { 
      return (
        <form className="search-selector" onSubmit={this.searchTermHandle}> 
          <label htmlFor="search_input">Search:</label>
          <input type="text" name="search_input" id="search_input" placeholder="e.g. Henry"/>
          <button type="submit" name="search" id="search">Search</button>
        </form>
      )
    }
}

export default BookSearch;