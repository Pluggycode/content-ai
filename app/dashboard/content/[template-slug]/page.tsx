'use client'
import React, { useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/ListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModel'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { totalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useContext } from 'react'
import { useRouter } from 'next/navigation'

interface PROPS{
    params:{
        'template-slug':string
    }
}

const CreateNewContent = (props:PROPS) => {

    const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug==props.params['template-slug'])

    const [loading, setLoading] =useState(false);
    const [aiOutput,setAiOutput] = useState<string>();
    const {user} = useUser();
    const router=useRouter();
    const {totalUsage,setTotalUsage} = useContext(totalUsageContext)

    const GenerateAIContent=async(FormData:any) =>{
        if(totalUsage >= 10000)
        {
            console.log("please upgrade")
            router.push("/dashboard/billing")
            return;
        }
        setLoading(true);
        const SelectedPrompt = selectedTemplate?.aiPrompt;

        const FinalAIPropmt = JSON.stringify(FormData)+","+SelectedPrompt;

        const result = await chatSession.sendMessage(FinalAIPropmt);
        if(result && result.response) {
            console.log(result.response.text());
        }
        else
        {
            console.error('No response or results is recived');
        }
        setAiOutput(result?.response.text());
        await SaveInDb(FormData,selectedTemplate?.slug,result?.response.text())
        setLoading(false);
    }
    const SaveInDb = async (formData:any,slug:any,aiResp:string|undefined) => {
        const result = await db.insert(AIOutput).values({
            formData:formData,
            templateSlug:slug,
            aiResponse:aiResp,
            createdBy:user?.primaryEmailAddress?.emailAddress,
            createdAt:moment().format('DD/MM/YYYY'),
    });

    console.log(result);
    }

  return (
    <div className="p-5">
        <Link href={"/dashboard"}>
        <Button><ArrowLeft/>Back</Button>
        </Link>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
        {/* formsection */}
        <FormSection  selectedTemplate={selectedTemplate}userFormInput={(v:any)=>GenerateAIContent(v)} loading={loading}/>


        {/* Outputsection */}
        <div className='col-span-2'> <OutputSection aiOutput={aiOutput}/></div>
    </div>
    </div>
  )
}

export default CreateNewContent