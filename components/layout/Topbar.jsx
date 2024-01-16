'use client'
import { SignOutButton, SignedIn } from '@clerk/nextjs';
import { Add, Logout, Search } from '@mui/icons-material'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import React, { useReducer, useState } from 'react'

const Topbar = () => {
    const router =useRouter();
    const [search, setSearch] =useState('');
  return (
    <div className='flex justify-between items-center mt-6'>
      <button className='create-post-btn' onClick={()=>router.push('/create-post')}><Add/><p>Create A Post</p></button>
      <div className='relative'>
        <input type='text' className='search-bar' placeholder='Search posts, people, ...' value={search} onChange={(e)=> setSearch(e.target.value)}/>
        <Search className='search-icon' onClick={()=>{}}/>
      </div>
      <div className='flex gap-3'>
      <SignedIn>
            <SignOutButton>
                <div className='flex cursor-pointer gap-4 md:hidden'>
                <Logout sx={{color: "white", fontSize:"32px"}}/>
                
                </div>
            </SignOutButton>
        </SignedIn>
      </div>
      <Link href='/'>
        <Image src="/assets/mispic.png" alt="profile" width={50} height={50} className='rounded-full md:hidden'/>
      </Link>
    </div>
  )
}

export default Topbar
