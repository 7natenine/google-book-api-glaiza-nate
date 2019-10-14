import React from 'react';

import Header from './components/Header';
import BookSearch from './components/BookSearch';
import BookResult from './components/BookResult';

function App() { 
    return (
      <main className="BookSearchApp">
        <Header />
        <BookSearch />
        <div>
        <BookResult />
        </div>
      </main>
  );
}

export default App;