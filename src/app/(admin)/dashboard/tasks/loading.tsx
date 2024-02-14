import { Skeleton } from '@/components/ui/Skeleton'
import React, { FC } from 'react'

const TaskLoading: FC = () => {
  return (
    <Skeleton className='w-full h-[500px]' />
  )
}

export default TaskLoading