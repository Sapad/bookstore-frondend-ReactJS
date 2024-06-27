import { useState } from "react";
function ManajemenBuku({bookList, store ,update, remove}){
    // data
    console.log(bookList);
    const [inputBook, setInputBook] = useState();
    const [form, setFrom] = useState();
    // event handling  
    function handleJudul(event) {
        setInputBook({ ...inputBook, Judul: event.target.value });
    }
    function handlePengarang(event) {
        setInputBook({ ...inputBook, Pengarang: event.target.value });
    }
    function handleHarga(event) {
        setInputBook({ ...inputBook, Harga: event.target.value });
    }
    function handleStok(event) {
        setInputBook({ ...inputBook, Stok: event.target.value });
    }
    function submitAdd(event) {
        event.preventDefault();
        store(inputBook);
    }
    function showCreate(){
        setFrom("create");
    }
    function showEdit(book) {
        setInputBook(book);

        setFrom("edit");
    }
    //
    function submitChange(event){
        event.preventDefault();
        update(inputBook);
        setFrom("");
    }
    function deleteBook(book){
        remove(book);
    }
    

    return (
        <div className="container mt-3">
            <h1 className="text-center">Manajemen Buku</h1>
            <button className="btn btn-primary m-2" onClick={showCreate}>Tambah Buku</button>
            {form === "create" && (
            <div id="formTambah">
                <h5>Tambah Buku</h5>
                <hr />
                <form className="form-row"  onSubmit={submitAdd}>
                    <div className="col-3">
                        <input type="text" name="Judul" className="form-control mx-2" placeholder="Judul" onChange={handleJudul} />
                    </div>
                    <div className="col-3">
                        <input type="text" name="Pengarang" className="form-control mx-2" placeholder="Pengarang" onChange={handlePengarang} />
                    </div>
                    <div className="col-2">
                        <input type="text" name="Harga" className="form-control mx-2" placeholder="Harga" onChange={handleHarga} />
                    </div>
                    <div className="col-2">
                        <input type="number" name="Stok" className="form-control mx-2" placeholder="Stok" onChange={handleStok}/>
                    </div>
                    <div className="col-2">
                        <input type="submit" className="btn btn-primary ml-5" placeholder="Simpan" />
                    </div>

                </form>
                </div>
            )}
            
            {form ==="edit" && (
            <div id="formUbah"> 
            <h5>Ubah Buku</h5>
            <hr />
            <form className="from-row" onSubmit={submitChange}>
                <div className="col-3">
                    <input type="text" name="Judul" className="form-control mx-2"placeholder="Judul" onChange={handleJudul} value={inputBook.Judul}/>
                </div>
                <div className="col-3">
                    <input type="text" name="Pengarang" className="form-control mx-2"placeholder="Pengarang"onChange={handlePengarang} value={inputBook.Pengarang} />
                </div>
                <div className="col-2">
                    <input type="text" name="Harga" className="form-control mx-2"placeholder="Harga" onChange={handleHarga} value={inputBook.Harga}/>
                </div>
                <div className="col-2">
                    <input type="number" name="Stok" className="form-control mx-2"placeholder="Stok" onChange={handleStok} value={inputBook.Stok} />
                </div>
                <div className="col-3">
                    <input type="submit" className="btn btn-warning ml-2" placeholder="Ubah" />
                </div>
            </form>
            </div>
            )}
            <div id="daftarBuku">
                <h2 className="mt-3">Daftar Buku</h2>
                <hr />
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Judul</th>
                            <th>Pengarang</th>
                            <th>Harga</th>
                            <th>Stock</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookList.map((book,index) => (
                            <tr key={index}>
                                <td> {index +1} </td>
                                <td> {book.Judul} </td>
                                <td> {book.Pengarang} </td>
                                <td> {book.Harga} </td>
                                <td> {book.Stok} </td>
                                <td>
                                    <button className="btn btn-info mr-3" onClick={() => showEdit(book)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => deleteBook(book)}>delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ManajemenBuku;