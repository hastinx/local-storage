import React, { useEffect, useState } from 'react'
import Navbar from '../navbar'
import { useNavigate } from 'react-router-dom'
const Input = () => {

    let data = JSON.parse(localStorage.getItem('table'))


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
                                </tr>
                            </thead>
                            <tbody>
                                {data.length > 0 ? data.map(i =>
                                    <tr>

                                        <td className='text-center' key={i.id}>{i.nama}</td>

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