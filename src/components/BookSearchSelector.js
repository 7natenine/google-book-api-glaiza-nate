import React from 'react'

 class BookSearchSelector extends React.Component { 
   bookFilter = (e) => {
    e.preventDefault()
    const printType = e.currentTarget.print_type.value
    const bookType = e.currentTarget.book_type.value
    const searchTerm = this.props.searchTerm
    this.props.searchBookTypeFilter(searchTerm, bookType, printType )
   }

  render() { 
    return (
        <form className="book_filter" onChange={this.bookFilter}> 
          <label htmlFor="print_type">Print Type:</label>
          <select id="print_type" name="print_type">
            <option value="all">All</option>
            <option value="books">books</option>
            <option value="magazines">magazines</option>
          </select>

          <label htmlFor="book_type">Book Type:</label>
          <select id="book_type" name="book_type">
            <option value="no_filter">No Filter</option>
            <option value="eBooks">eBooks</option>
            <option value="free_ebooks">free-ebooks</option>
            <option value="All">full</option>
            <option value="paid_ebooks">paid-ebooks</option>
            <option value="partial">partial</option>
          </select>
        </form>

    )
  }
}

export default BookSearchSelector;