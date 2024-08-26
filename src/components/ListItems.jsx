import React, { useRef } from 'react'
import check from '../assets/icons/check.png'
import deleteIcon from '../assets/icons/delete.png'

const ListItems = ({text}) => {

    



    return (
        <div className='flex items-center my-3 gap-2'>
            <div className='flex flex-1 cursor-pointer items-center'>
                <img className='w-7' src={check} alt="" />

                <p className='text-slate-700 ml-4 font-[17px]'>
                    {text}
                </p>
            </div>

            <img className='w-4 cursor-pointer' src={deleteIcon} alt="" />
        </div>
    )
}

export default ListItems