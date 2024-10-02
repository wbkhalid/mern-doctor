import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-bold'>Top Doctors</h1>
            <p className='sm:w-2/3 text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi amet iure quo voluptatum doloremque </p>
            <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0' >
                {
                    doctors.slice(0, 10).map((item) => (
                        <div className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-300' onClick={() => navigate(`/my-appointment/${item._id}`)}>
                            <img src={item.image} alt="" className='blue-bg-50' />
                            <div className='p-4'>
                                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                    <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>
                                        Available
                                    </p>
                                </div>
                                <p className='text-gray text-lg font-medium'>
                                    {item.name}
                                </p>
                                <p className='text-gray-600 font-medium'>
                                    {item.speciality}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>Show More</button>
        </div>
    )
}

export default TopDoctors
