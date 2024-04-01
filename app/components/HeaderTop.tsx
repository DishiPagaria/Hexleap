import React from 'react'

const HeaderTop = () => {
  return (
    <div className='hidden sm:block'>
        <div className="container py-4 my-5">
            <div className="flex justify-between items-center">
                <div className="hidden lg:flex gap-1">
                    <div className="header_top_icon_wrapper">
                        <span className='border-b-2 border-blue-400'>Sports</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop