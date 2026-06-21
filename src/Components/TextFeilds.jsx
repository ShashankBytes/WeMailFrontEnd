import React from 'react'

const TextFeilds = ({label,type,placeholder,id,value,onChange}) => {
  return (
    <div>
        <div className="mb-5">
                <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading ">{label}</label>
                <input type={type} id={id} value={value} onChange={onChange} className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body rounded-2xl" placeholder={placeholder} />
        </div>
    </div>
  )
}

export default TextFeilds
