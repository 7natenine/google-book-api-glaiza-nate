import React from 'react';

import Header from './components/Header';
import BookSearch from './components/BookSearch';
import BookSearchSelector from './components/BookSearchSelector';
import BookList from './components/BookList';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends React.Component { 
  state = {
    books: [],
    searchTerm: '',
    loading: false,
    error: null
  }

  searchBooks = (term) => {
    this.setState({searchTerm: term, loading: true, error: null})
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}`)
    .then(res => res.ok ? res.json() : Promise.reject('Something went wrong')) 
    .then(books => this.setState({books: books.items, loading: false}))
    .catch(error => this.setState({error, loading: false}));
  }
 
  searchBookTypeFilter = (searchTerm, bookType, printType) => {
    if(printType === 'magazines') {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&printType=${printType}`)
      .then(res => res.ok ? res.json() : Promise.reject('Something went wrong')) 
      .then(books => this.setState({books: books.items, loading: false}))
      .catch(error => this.setState({error, loading: false}));
    } else {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&filter=${bookType}&printType=${printType}`)
      .then(res => res.ok ? res.json() : Promise.reject('Something went wrong')) 
      .then(books => this.setState({books: books.items, loading: false}))
      .catch(error => this.setState({error, loading: false}));
    }
   
  }


  render() {
    // console.log(this.searchBooks);

    let displayBookList = <BookList currency={USCurrencyFormat} books={this.state.books}/>
    if(this.state.error){
      return <div>Error: {this.state.error}</div>
    }
    else if (this.state.loading) {
      return <div>loading...</div>
    }

    return (
      <main className="App">
        <Header />
        <BookSearch searchBooks={this.searchBooks}/>
        <BookSearchSelector searchTerm={this.state.searchTerm} searchBookTypeFilter={this.searchBookTypeFilter}/>
        <div>
          {displayBookList}
        </div>
      </main>
  );
  }

}

export default App;