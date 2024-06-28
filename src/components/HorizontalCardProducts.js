import React, { useRef } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'


const HorizontalCardProducts = () => {
    const scrollElement = useRef()



    const scrollRight = () =>{
        scrollElement.current.scrollLeft += 300
    }
    const scrollLeft = () =>{
        scrollElement.current.scrollLeft -= 300
    }
  return (
    <div className='container mx-auto px-4 my-6 relative'>
        <h2 className='text-2xl font-semibold py-4'>Best of Electronics</h2>
        <div className='flex items-center gap-4 md:gap-6 overflow-scroll scrollbar-none transition-all' ref={scrollElement}>
            <div className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex'>
                <div className='bg-white h-full p-4 min-w-[120px] md:min-w-[145px]'>
                    <img src='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRnk2z_seE7XK-1qnYxaOTrDSCjqaWVJAac2bH_XceaqHMyhwS3pv6hstHMQBPFL0t-sQuGxHH-5HTsxX2CirohqYYMavTfiTRxQVofd3ie' className='object-scale-down h-full hover:scale-110 transition-all'/>
                </div>
                <div className='p-4 grid'>
                    <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black'>Smartwatches</h2>
                    <div className='flex gap-3'>
                    <p className='text-slate-500'>Starts at</p>
                    <p className='text-red-600 font-medium'>₹1,000</p>
                    </div>
                </div>
            </div>  
            <div className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex'>
                <div className='bg-white h-full p-4 min-w-[120px] md:min-w-[145px]'>
                    <img src='https://m.media-amazon.com/images/I/41eTFK7clfL._SX300_SY300_QL70_FMwebp_.jpg' className='object-scale-down h-full hover:scale-110 transition-all'/>
                </div>
                <div className='p-4 grid'>
                    <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black'>Portables</h2>
                    <div className='flex gap-3'>
                    <p className='text-slate-500'>Starts at</p>
                    <p className='text-red-600 font-medium'>₹5,000</p>
                    </div>
                </div>
            </div>  
            <div className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex'>
                <div className='bg-white h-full p-4 min-w-[120px] md:min-w-[145px]'>
                    <img src='https://m.media-amazon.com/images/I/51RCaRoUPKL._SX300_SY300_QL70_FMwebp_.jpg' className='object-scale-down h-full hover:scale-110 transition-all'/>
                </div>
                <div className='p-4 grid'>
                    <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black'>Cameras</h2>
                    <div className='flex gap-3'>
                    <p className='text-slate-500'>Starts at</p>
                    <p className='text-red-600 font-medium'>₹39,000</p>
                    </div>
                </div>
            </div>  
            <div className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex'>
                <div className='bg-white h-full p-4 min-w-[120px] md:min-w-[145px]'>
                    <img src='https://m.media-amazon.com/images/I/31u6f4UOYhL._SX300_SY300_QL70_FMwebp_.jpg' className='object-scale-down h-full hover:scale-110 transition-all'/>
                </div>
                <div className='p-4 grid'>
                    <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black'>Printers</h2>
                    <div className='flex gap-3'>
                    <p className='text-slate-500'>Starts at</p>
                    <p className='text-red-600 font-medium'>₹13,000</p>
                    </div>
                </div>
            </div>  
            <div className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex'>
                <div className='bg-white h-full p-4 min-w-[120px] md:min-w-[145px]'>
                    <img src='https://m.media-amazon.com/images/I/41nzykE3sIL._SX300_SY300_QL70_FMwebp_.jpg' className='object-scale-down h-full hover:scale-110 transition-all'/>
                </div>
                <div className='p-4 grid'>
                    <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black'>Earbuds</h2>
                    <div className='flex gap-3'>
                    <p className='text-slate-500'>Starts at</p>
                    <p className='text-red-600 font-medium'>₹1,000</p>
                    </div>
                </div>
            </div>  
            <div className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex'>
                <div className='bg-white h-full p-4 min-w-[120px] md:min-w-[145px]'>
                    <img src='https://m.media-amazon.com/images/I/61D7YGFRJhL._SX679_.jpg' className='object-scale-down h-full hover:scale-110 transition-all'/>
                </div>
                <div className='p-4 grid'>
                    <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black'>Trimmers</h2>
                    <div className='flex gap-3'>
                    <p className='text-slate-500'>Starts at</p>
                    <p className='text-red-600 font-medium'>₹800</p>
                    </div>
                </div>
            </div>  
        </div>
        
    </div>

    
  )
}

export default HorizontalCardProducts