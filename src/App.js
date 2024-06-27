import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Beranda from "./components/Beranda";
import ManajemenBuku from "./components/ManajemenBuku";
import Navbar from "./components/Navbar";
import axios from "axios";
import {
  useEffect,
  useState
} from "react";

function App() {
  const [books, setBooks] = useState([]);
  // menjalankan ketika halaman pertama 
  useEffect(() => {
    retrieveData();
  });
  //memanggil semua data di database
  function retrieveData() {
    axios
      .get("http://localhost:4000/book")
      .then((response) => {
        setBooks(response.data);
      })
      .catch(function (erorr) {
        console.log(erorr);
      })
  }

  // menambahkan data
  function storeData(inputBook) {
    // console.log(inputBook);
    // alert("Data berhasil ditambahkan!");
    axios
      .post("http://localhost:4000/book/add", inputBook)
      .then((res) => {
        setBooks((prevBooks) => [...prevBooks, inputBook]);
        alert("Data berhasil ditambahkan !");
      })
      .catch((erorr) => {
        console.log(erorr.response.data);
      });
  }

  // update data
  function updateData(inputBook) {
    // console.log(inputBook);
    // alert("Data berhasil di perbaharui !");
    axios
      .put("http://localhost:4000/book/update/" + inputBook._id, inputBook)
      .then((res) => {
        retrieveData();
        alert("Data berhasil diperbaharui !");
      })
      .catch((erorr) => {
        console.log(erorr.response.data);
      });
  }

  // delete data 
  function deleteData(book) {
    // console.log(book);
    // alert("Data berhasil dihapus!")
    axios
      .delete("http://localhost:4000/book/delete/" + book._id)
      .then(() => {
        retrieveData();
        alert("Data berhasil dihapus!");
      })
      .catch((erorr) => {
        console.log(erorr.response.data);
      });
  }
  return ( 
  <div >
    <BrowserRouter >
    <Navbar / >

    <Routes >
    <Route path = "/"
    element = {
      < Beranda / >
    }
    /> 
    <Route path = "/manajemen-buku"
    element = {
      < ManajemenBuku
      bookList = {
        books
      }
      store = {
        storeData
      }
      update = {
        updateData
      }
      remove = {
        deleteData
      }
      />} / >
      </Routes> 
      </BrowserRouter> </div>
    );
  }


  export default App;