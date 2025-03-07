import React from 'react'
import useAuthContext from '../context/AuthContext'

function Orders() {
  const {user} = useAuthContext();
  console.log(user)

  return (
    <div>Orders</div>
  )
}

export default Orders