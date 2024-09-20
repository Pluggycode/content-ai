
import Templates from '@/app/(data)/Templates'
import { Button} from '@/components/ui/button'
import { db } from '@/utils/db'
import { AIOutput} from '@/utils/schema'
import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import { desc,eq } from 'drizzle-orm'
import  Image  from 'next/image'
import { TEMPLATE } from '../_components/ListSection'


 export interface HISTORY{
   id:Number,
   formData:string ,
   aiResponse:string,
   templateSlug:string,
   createdBy:string,
   createdAt:string
  }
  

async function History(){
    const user = await currentUser();
    {/* @ts-ignore */}
    
    const HistoryList:HISTORY[]= await db.select().from(AIOutput).where(eq(AIOutput?.createdBy,user?.primaryEmailAddress?.emailAddress))
    .orderBy(desc(AIOutput.id));

    const GetTemplateName = (slug:string) =>{
        const templates:TEMPLATE | any = Templates?.find((item) => item.icons && item.slug)
        return templates;
    }

  return (
    <div className='w-395 bg-white ml-5 mt-5 border shadow-md'>
          <div>
            <h2 className='font-bold text-3xl'>History</h2>
            <p className='text-gray-500'>Search your previously generated content</p>
            </div>
            <div className="grid grid-cols-7 font-bold bg-secondary mt-5 py-3 items-center">
              <h2 className='cols-span-2'>TEMPLATE</h2>
              <h2 className='cols-span-2'>AI-RESP</h2>
              <h2 className='cols-span-2'>DATE</h2>
              <h2 className='cols-span-2'>WORDS</h2>
              <h2 className='cols-span-2'>COPY</h2>
              </div>
            {HistoryList.map((item:HISTORY,index:number) => (
              <>
              <div className="grid grid-cols-7 my-5 py-5 px-3">
                <h2 className='col-span-2 flex gap-2 items-center'>
                  <Image src={GetTemplateName(item?.templateSlug)?.icons} width={25} height={25} alt='thing'/>
                  {GetTemplateName(item.templateSlug)?.name}
                </h2>
                <h2 className='col-span-2 line-clamp-3'>{item?.aiResponse}</h2>
                <h2>{item?.createdAt}</h2>
                <h2>{item.aiResponse.length}</h2>
                <h2>
                  <Button variant='ghost' className='text-primary'>Copy</Button>
                </h2>
              </div>
              </>
            ))}
          </div>
  )
}

export default History