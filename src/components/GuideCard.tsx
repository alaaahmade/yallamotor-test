import React from 'react'

const GuideCard = ({guide} : any) => {
  return (
    <div className="bg-white rounded shadow p-10 flex items-center flex-col gap-2">
    {guide.icon()}
    <h3 className="text-center font-bold">{guide.title}</h3>
    <p className=" text-center text-sm text-gray-600">{guide.description}</p>
  </div>
  )
}

export default GuideCard
