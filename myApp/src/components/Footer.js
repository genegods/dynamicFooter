import React, {useState, useEffect} from 'react'

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const interval = setInterval(() => {
            setYear(new Date().getFullYear());
          }, 1000); // update every second
      
          return () => clearInterval(interval);
    }, []);
  return (
    <React.Fragment>
    <main>
      <div className='h-screen bg-black flex items-end'>
        <div className="bg-white w-full h-40 font-semibold text-sm flex justify-center items-center md:text-2xl">
        <p className="text-center">Gooddo Micro Projects © {year}</p>
        </div>
      </div>
    </main>
  </React.Fragment>
  )
}

export default Footer