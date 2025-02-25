'use client'
import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { totalUsageContext } from '../(context)/TotalUsageContext';

const layout = (
    {
        children,
      }: Readonly<{
        children: React.ReactNode;
      }>
) => {

  const [totalUsage,setTotalUsage]=useState<Number>(0)
  return (
    <totalUsageContext.Provider value={{totalUsage,setTotalUsage}}>
    <div className='bg-slate-100 h-screen'>
        <div className="md:w-64 hidden md:block fixed"> <SideNav/></div>
        <div className="ml-64"> <Header/> {children}</div>
        </div>
        </totalUsageContext.Provider>
  )
}

export default layout