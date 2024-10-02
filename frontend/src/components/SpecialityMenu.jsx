import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
            <h1 className='text-3xl font-medium'>Finf by Speciality</h1>
            <p className='sm:w-2/3 text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veniam? Quaerat, inventore itaque voluptate saepe voluptas vitae, eaque minus voluptatibus molestias, labore iste. Officia neque rem earum similique nisi velit!</p>
            <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
                {
                    specialityData?.map((item) => (
                        <Link onClick={() => scrollTo(0, 0)} to={`/doctors/${item.speciality}`} key={item.speciality} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
                            <img src={item?.image} alt="" className='w-16 sm:w-24 mb-2' />
                            <p>{item?.speciality}</p>
                        </Link>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default SpecialityMenu
