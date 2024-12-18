import { cn } from '@/lib/utils'
import { Download } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import HackerBtn from './animation/HackerBtn'

function DownLoadResumeBtn() {
  return (
    <div className="h-fit min-w-[180px] mt-2 py-2">
      <HackerBtn label='Download Resume' />
    </div>
  )
}

export default DownLoadResumeBtn