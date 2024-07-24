import React from 'react'

const Loader = () => {
    return (
        <>
            <div className='h-full w-full flex justify-center items-center'>
                <div className=" w-full h-full flex items-center justify-center bg-opacity-50 z-50">
                    <div className="animate-spin rounded-full h-20 w-20 border-t-[3px] border-b-[3px]  border-[#8c7fe6;]"></div>
                </div>
            </div>
        </>
    )
}

export default Loader
