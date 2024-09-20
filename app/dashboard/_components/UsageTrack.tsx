'use client'
import { Button } from '@/components/ui/button'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { db } from '@/utils/db'
import React, { useContext, useEffect, useState } from 'react'
import { Result } from 'postcss'
import { eq } from 'drizzle-orm'
import { HISTORY } from '../history/page'
import { totalUsageContext } from '@/app/(context)/TotalUsageContext'



 function UsageTrack() {

    const {user} = useUser();
    const {totalUsage,setTotalUsage} = useContext(totalUsageContext)
    
    useEffect(() =>{
        user&&getData();

    },[user])
    
    const getData = async() =>{
        {/* @ts-ignore */}
        const result:HISTORY[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress))
        getTotalUsage(result);
    }

    const getTotalUsage = (result:HISTORY[]) =>{

       let total:number = 0;
        result.forEach(element =>{
            total=total+Number(element.aiResponse?.length)
        });

        setTotalUsage(total);
        console.log(total); 
    }

  return (
    <div className='m-5'>
        <div className="bg-primary text-white rounded-lg p-3">
            <h2 className="font-medium">credits</h2>
            <div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
                <div className="h-2 bg-white rounded-full"
                style={{
                    width:(totalUsage/10000)*100+"%"
                }}></div>
            </div>
            <h2 className='text-sm my-2'>{totalUsage}/10,000 credits  Used</h2>
        </div>
            <Button variant={'secondary'} className='w-full my-3 text-primary'>Upgrade</Button>
    </div>
  )
}

export default UsageTrack