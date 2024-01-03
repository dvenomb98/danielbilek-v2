import React, { FC } from 'react'
import { Skeleton } from '../ui/Skeleton'

const ShortLikesSkeleton: FC = () => {

  return (
    <div className="flex gap-2 px-4 items-center">
      <Skeleton className='w-6 h-6 rounded-full' />
      <Skeleton className='w-20 h-6' />
    </div>
  )
}

export default ShortLikesSkeleton