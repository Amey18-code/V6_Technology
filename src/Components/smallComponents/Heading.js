import React from 'react'

const Heading = ({ headingText }) => {
  return (
      <h1 className='text-[28px] font-[600]'>{headingText}</h1>
  )
}

Heading.defaultProps = {
  headingText: 'Dashboard',
};

export default Heading
