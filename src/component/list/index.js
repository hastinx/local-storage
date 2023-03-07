import React from 'react'
import Navbar from '../navbar'
const List = () => {

    var data = [
        { 'id': 1, 'nama': 'Adam' },
        { 'id': 2, 'nama': 'Hastin' },
        { 'id': 3, 'nama': 'Dian' },
        { 'id': 4, 'nama': 'Dienda' },
        { 'id': 5, 'nama': 'Loma' }]

    // var dataTable = []

    // localStorage.removeItem('table')

    //Fungsi untuk menambahkan nama pada list
    const addName = (param) => {
        if (JSON.parse(localStorage.getItem('table')) !== null) { //pengecekan apakah localStorage item table ada atau tidak
            /**
             * kita buat variable table untuk menyimpan value dari item localStorage
             * dan di sini kita buat variable table
             * ketika localStorage item table ada maka variable table berisi item localStorage
             */
            var table = JSON.parse(localStorage.getItem('table'))
        } else {
            /**
             * jika localStorage item table tidak ada maka variable table kita isi dengan array kosong
             */
            table = []
        }

        /**
         pengecekan data yang akan dimasukan ke dalam list, untuk mengetahui data tersebut sudah ada atau belum
         */
        if (table.some(e => e.id === param.id)) {
            alert('data anda sudah ada') //jika sudah ada maka akan tampil alert
        } else {
            // jika belum ada maka menambahkan data ke dalam localStorage
            localStorage.setItem('table', JSON.stringify([{ 'id': param.id, 'nama': param.nama }, ...table]))
        }
    }

    //Fungsi untuk menghapus nama pada list
    const deleteName = (param) => {
        let list = JSON.parse(localStorage.getItem('table'))
        var index = list.findIndex(i => i.id === param.id);
        list.splice(index, 1)
        localStorage.setItem('table', JSON.stringify(list))
    }


    return (
        <Navbar>
            <div className='d-flex justify-content-center align-items-center bg-dark' style={{ height: '100vh' }}>
                <div className='card' style={{ width: '1200px', height: '500px' }}>
                    <div className='card-body'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className='text-center' scope="col">Name</th>
                                    <th className='text-center' scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(i =>
                                    <tr>

                                        <td className='text-center' key={i.id}>{i.nama}</td>
                                        <td className='text-center'>
                                            <button className='btn btn-sm btn-success col-1 mx-1' onClick={(e) => addName(i)}><i className='fa-solid fa-plus' /></button>
                                            <button className='btn btn-sm btn-danger col-1 mx-1' onClick={(e) => deleteName(i)}><i className='fa-solid fa-trash' /></button>
                                        </td>

                                    </tr>
                                )}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </Navbar>


    )
}

export default List