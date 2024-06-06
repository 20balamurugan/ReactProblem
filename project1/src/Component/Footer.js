import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className='text-center bg-info p-3 foot'>
        <h3>Copyright@{currentYear}</h3>
    </div>
  )
}

export default Footer