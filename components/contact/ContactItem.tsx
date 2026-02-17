import { InfoIcon } from 'lucide-react'
import React from 'react'

export default function ContactItem() {
  return (
      <div className='mb-8 flex w-full max-w-[330px] gap-3'>
          <div className='mr-6 flex h-10 max-w-10 items-center justify-center overflow-hidden rounded-sm bg-primary/10 text-primary'>
              <InfoIcon />
          </div>
          <div className='w-full'>
              <h4></h4>
              <p></p>
          </div>
    </div>
  )
}
