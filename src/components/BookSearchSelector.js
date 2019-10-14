import React from 'react'

 class BookSearchSelector extends React.Component { 
   bookFilter = (e) => {
    e.preventDefault()
    const bookType = e.currentTarget.book_type.value
    const printType = e.currentTarget.print_type.value
    const searchTerm = this.props.searchTerm
    this.props.searchBookTypeFilter(searchTerm, bookType, printType )
   }

  render() { 
    return (
        <form className="book_filter" onChange={this.bookFilter}> 
          <label htmlFor="print_type">Print Type:</label>
          <select className="print_type" name="print_type" id="book_type">
            <option value="all">All</option>
            <option value="books">books</option>
            <option value="magazines">magazines</option>
          </select>

          <label htmlFor="book_type">Book Type:</label>
          <select className="book_type" id="book_type" name="book_type">
            <option value="no_filter">No Filter</option>
            <option value="eBooks">All</option>
            <option value="free_ebooks">Free E-books</option>
            <option value="paid_ebooks">Paid E-books</option>
          </select>
        </form>

    )
  }
}

export default BookSearchSelector;