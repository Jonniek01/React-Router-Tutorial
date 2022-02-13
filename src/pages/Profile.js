import React from 'react'
import { Routes, Route,Link,useMatch } from 'react-router-dom'
import ViewProfile from '../components/ViewProfile'
import { EditProfile } from '../components/EditProfile'


export const Profile = () => {
    const {path,url}=useMatch();
  return (
   <>
   <h>profile</h>
   <ul>
       <li>
           <Link to={`${url}/profile/viewprofile`}>VIEW</Link>
       </li>
       <li>
           <Link to={`${url}/profile/editprofile`}>EDIT</Link>
       </li>

   </ul>
   <Routes>
       <Route path={`${path}/viewprofile`} element={ViewProfile}/>
       <Route path={`${path}/editrofile`} element={EditProfile}/>

   </Routes>
   </>
  )
}

export default Profile