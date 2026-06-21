import React from 'react'
import axios from 'axios'

const EmailApiService = async(formData) => {

    const URL="http://localhost:8080/api/v1/mail"

    if(formData.file==null){

        const validFormData={
            to:formData.to,
            subject:formData.subject,
            message:formData.message
        }

        const response=await axios.post(
        `${URL}/send`,
        validFormData

    )
        return response
    }
    else {
        const validFormData=new FormData();

        validFormData.append('to',formData.to)
        validFormData.append('subject',formData.subject)
        validFormData.append('message',formData.message)
        validFormData.append('file',formData.file)

        const response=axios.post(
            `${URL}/send-with-file`,
            validFormData
        )
        return response;
    }
}

export default EmailApiService