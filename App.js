import './App.css';
import Book from './Book';

function App() {
  return (
    <div className="App">
    <h1>My Favourite Books</h1>
    <Book name="Jurassic Park ,"author="Michael Crichton"></Book>
    <Book name="Ikigai ,"author="Hector Garcia"></Book>
    <Book name="Ponniyin Selvan ,"author="Kalki"></Book>
    <Book name="The Lord of the Rings ,"author="J.R.R.Tolkien"></Book>
    <Book name="Harry Potter ,"author="J.K.Rowling"></Book>
    </div>
  )
}

export default App;