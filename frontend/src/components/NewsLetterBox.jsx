import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-violet-700'>Suscribe now $ get 20% off</p>
        <p className='text-gray-400 mt-3'>Get Latest Update On Our New Products On A Go</p>
        <form action={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6  pl-3'>
            <input type="email" name="" id="" className='w-full sm:flex-1 outline-none' placeholder='Enter your email' required/>
            <button type='submit' className='bg-violet-500 text-white text-xs px-10 py-3'> SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox