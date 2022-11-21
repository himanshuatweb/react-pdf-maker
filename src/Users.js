import React from 'react'

import User from './User'

const Users = ({users}) => {
  return (
    <div className='users'>
        {users.map(function(user){
            return <User key={user.id} user={user} />
        })}
    </div>
  )
}

export default Users