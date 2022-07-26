import React, {useState} from "react";


const Modal = ({setIsOpen}) => {
  return (
    <div className="bg-gray-800 z-1 fixed left-0 top-0 w-full h-full overflow-auto">
      <div className='bg-[#fefefe] mx-20 mt-20 py-5 px-10 flex flex-col justify-center'>
        <h1 className='text-2xl'>dumb modal</h1>
        <p>This is a dumb modal</p>
        <button onClick={() => setIsOpen(false)} className='m-5 px-6 py-3 bg-blue-600 rounded text-white text-lg rounded-lg hover:bg-blue-800'>Close</button>
      </div>
    </div>
  )
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      <h1 className=''>Hello StackBlitz!</h1>
      <button onClick={() => setIsOpen(true)} className='m-5 px-6 py-3 bg-blue-600 rounded text-white text-lg rounded-lg hover:bg-blue-800'>Hi There</button>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
