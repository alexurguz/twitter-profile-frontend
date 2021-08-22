import React from 'react'

const Container = ({children}) => {
  return (
    <div className="w-full flex flex-col items-center h-screen bg-gray-100">
      {children}
    </div>
  )
}

export default Container
