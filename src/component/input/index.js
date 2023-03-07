import React, { useEffect, useState } from 'react'
import Navbar from '../navbar'
import { useNavigate } from 'react-router-dom'
const Input = () => {
    const [data, setData] = useState([])
    // const [dataTable, setDatatable] = useState([])
    // const [counter, setCounter] = useState(0)

    let list = JSON.parse(localStorage.getItem('table'))


    const deleteName = (param) => {
        var index = list.findIndex(i => i.id === param.id);
        list.splice(index, 1)
        localStorage.setItem('table', JSON.stringify(list))
        setData(list)
    }

    useEffect(() => {
        setData(list)
    }, [])
    return (
        <Navbar>
            <div className='d-flex justify-content-center align-items-center bg-dark' style={{ height: '100vh' }}>
                <div className='card' style={{ width: '1200px', height: '500px' }}>
                    <div className='card-header bg-primary text-center fw-bold text-white'>
                        LIST AFTER INPUT
                    </div>
                    <div className='card-body'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className='text-center'>Name</th>
                                    <th className='text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.length > 0 ? data.map(i =>
                                    <tr>

                                        <td className='text-center' key={i.id}>{i.nama}</td>
                                        <td className='text-center'>
                                            <button className='btn btn-sm btn-danger col-1 mx-1' onClick={() => deleteName(i)}><i className='fa-solid fa-trash' /></button>
                                        </td>

                                    </tr>
                                ) : <tr><td colSpan={3} className='text-center'>Data tidak tersedia </td></tr>}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </Navbar>
    )
}

export default Input