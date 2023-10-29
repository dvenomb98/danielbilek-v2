import LastPost from '@/components/LastPost'
import ContactLayout from '@/components/contact/ContactLayout'
import SectionHeader from '@/components/shared/SectionHeader'
import { NextPage } from 'next'
import React from 'react'

const Page: NextPage = () => {
  return (
    <>
    <SectionHeader className='border-b border-divider pb-5' title="Contact me" description="My name is Daniel Bílek, and I am a front-end developer with a passion for organised work, creative problem solving, and critical thinking. I aim to deliver high-quality, user-friendly websites and web applications." />
    <ContactLayout />
    <LastPost />
    </>
  )
}

export default Page