import React, { FC } from 'react'
import ContactSidebar from './ContactSidebar'
import contact from '@/data/contact'

const ContactLayout: FC = () => {
  return (
    <div className='flex gap-5 items-start sm:flex-col'>
        <ContactSidebar />
        <ul className='flex flex-col gap-5 w-full'>
            {contact.map((value, i) => (
                <li  className="text-muted-foreground" key={i}>{value}</li>
            ))}
        </ul>

    </div>
  )
}

export default ContactLayout