import React from 'react'

 class BookSearchSelector extends React.Component { 
  render() { 
    return (
      <form className="search-selector"> 
        <label htmlFor="title">Search:</label>
        <input type="text" name="title" id="title" placeholder="e.g. Henry"/>
      
        <div> 
          <label htmlFor="print-type">Print Type:</label>
          <select id="print-type" name="print-type">
            <option value="all">All</option>
            <option value="books">books</option>
            <option value="magazines">magazines</option>
          </select>
        </div>
        <div>
          <label htmlFor="Book-Type">Book Type:</label>
          <select id="book-type" name="book-type">
            <option value="no-filter">No Filter</option>
            <option value="eBooks">eBooks</option>
            <option value="">free-ebooks</option>
            <option value="All">full</option>
            <option value="All">paid-ebooks</option>
            <option value="All">partial</option>
          </select>
        </div>
        <button type="submit" name="search" id="search">Search</button>
      </form>
    )
  }
}

export default BookSearchSelector;