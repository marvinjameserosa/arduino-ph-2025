import { IconMapPin, IconMapPin2, IconMapPinCheck } from '@tabler/icons-react'
import React from 'react'
import { Button } from '../ui/button'

const CtaBanner = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-10 py-10'>
        <div className='flex gap-4 items-center justify-center'>
            <IconMapPin className='w-8 h-10 text-secondary' />
            <h4 className='uppercase'>PUP Gym, Polytechnic University of the Philippines Main Campus</h4>
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
            <h2 className='uppercase text-[400px]'>March 23, 2025</h2>
            <h2 className='text-5xl italic'>Be Part of the Movement! Join and Celebrate Innovation with Us!</h2>
        </div>
        <Button className='py-6 px-12'>
            <p className='text-xl uppercase'>Register Now</p>
        </Button>
    </div>
  )
}

export default CtaBanner