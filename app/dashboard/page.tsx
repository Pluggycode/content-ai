'use client'
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import ListSection from './_components/ListSection'

const dashboard = () => {

  const [userSearchInput,setUserSearchInput] = useState<string>()

  return (
   
    <div className="">
      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)}/>
      <ListSection  userSearchInput = {userSearchInput}/>
    </div>
  )
}

export default dashboard