import React, { use } from 'react'
import { useSelector } from 'react-redux'   //to select states from redux we use useSelector

const Dashboard = () => {

    const { user } = useSelector(state => state.auth)

    console.log(user)

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard