import React from 'react'
import Button from './Button'

const buttonNameList = [
  {
    id: 0,
    name: 'All'
  },
  {
    id: 1,
    name: 'Programming'
  },
  {
    id: 2,
    name: 'Cricket'
  },
  {
    id: 3,
    name: 'Excercise'
  },
  {
    id: 4,
    name: 'Cooking'
  },
  {
    id: 5,
    name: 'Songs'
  },
  {
    id: 6,
    name: 'Gaming'
  },
  {
    id: 7,
    name: 'Motorcycle'
  },
  {
    id: 8,
    name: 'News'
  },
  {
    id: 9,
    name: 'Air Force'
  }
];

const ButtonList = () => {
  return (
    <div className='flex'>
      {
        buttonNameList.map((buttonName) => {
          return (
            <Button key={buttonName.id} name={buttonName.name} />
          )
        })
      }
    </div>
  )
}

export default ButtonList