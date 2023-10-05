import React ,{useId} from 'react'

function Select({
    options,
    label,
    className = '',
    ...props
},ref) {
    const id = useId()
    return (
        <div className='w-full'> 
        {label && <label htmlFor={id} className='' ></label>}
        <select ref = {ref} id={id} {...props} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} ></select>
        {options?.map((option)=>(
            <option key={option} value={option} >
                {option}
            </option>
        ))}
        </div>
    )
}

export default React.forwardRef(Select)
