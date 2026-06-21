import React from 'react'
import TextEditor from './TextEditor';
import TextFeilds from "./TextFeilds";
import Heading from './Heading';
import { useState } from 'react';
import EmailApiService from '../Services/EmailApiService';
import toast from 'react-hot-toast';
import FileUploader from './FileUploader';
import AskAI from './AskAI';
import AIPromptBox from './AIPromptBox';
        

const EmailSender = () => {
    const [formData,setFormData]=useState({
        to:'',
        subject:'',
        message:'',
        file:null
    });

    const [loading,setLoading]=useState(false)
    const [showBox,setShowBox]=useState(false)

    const isAuthoriseMail=(formData)=>{
        if(formData.to==='' || formData.subject==='' || formData.message===''){
            return false;
        }
        return true;
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        setLoading(true)
        try {
            if(!isAuthoriseMail(formData)){
                toast.error("Some Feilds are Empty")
                return;
            }
            const response=await EmailApiService(formData)
            console.log(response)
            toast.success("Mail Sent")
            setFormData({
                to:'',
                subject:'',
                message:'',
                file:null
            })
        } catch (error) {
            toast.error("Mail not send")
            console.log(error)
        }finally{
            setLoading(false)
        }

    }

    return (       

        <div className="min-h-screen flex flex-col justify-center items-center shadow-lg bg-[#161311]">
        {
            
            <>
                <Heading/>
                <form className="w-full max-w-4xl mx-auto mt-5 border-2 border-gray-500 p-5 rounded-2xl shadow-lg bg-[#fefefe]" onSubmit={handleSubmit}>
                <TextFeilds 
                    label="To" 
                    type="email" 
                    placeholder="Revievers Mail" 
                    id="to" value={formData.to}
                    onChange={(e)=>setFormData({
                        ...formData,
                        to:e.target.value
                    })}
                />
                <TextFeilds 
                    label="Subject" 
                    type="text" 
                    placeholder="Type Subject" 
                    id="subject"
                    value={formData.subject}
                    onChange={(e)=>setFormData({
                        ...formData,
                        subject:e.target.value
                    })}
                />
                <TextEditor value={formData.message} 
                            onChange={(e)=>{setFormData({
                            ...formData,message:e.htmlValue
                })}}/>
                <FileUploader onChange={(e)=>{setFormData({
                    ...formData,file:e.target.files[0]
                })}}/>
                <div className="box flex justify-between">
                    <button
                        type="submit"
                        disabled={loading}
                        className="text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2 disabled:opacity-50 flex items-center gap-2 mt-4 h-10"
                    >
                        {
                            loading && (
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            )
                        }

                        {loading ? "Sending..." : "Submit"}
                    </button>
                    {showBox && <AIPromptBox/>}
                    <AskAI setShowBox={setShowBox}/>
                </div>
            </form>
            </>
        }
        </div>
    )
}

export default EmailSender
