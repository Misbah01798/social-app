"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import { SignOutButton, SignedIn, UserButton } from '@clerk/nextjs'
import { Logout } from '@mui/icons-material'

const LeftSideBar = () => {
    const isLoggedIn =true
  return (
    <div className='h-screen left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-3 max-md:hidden custom-scrolbar'>
      <Link href="/">
      <Image src="/assets/logo2.png" alt='logo' width={200} height={50}/>
      </Link>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-2 items-center text-light-1'>
            <Link href="/">
                <Image src="/assets/mispic.png" alt="profile" width={50} height={50} className='rounded-full'/>
            </Link>
            <p className='text-small-bold'>MiS BAH</p>
        </div>
        <div className='flex text-light-1 justify-between'>
            <div className='flex flex-col items-center'>
                <p className='text-base-bold'>1</p>
                <p className='text-tiny-medium'>Post</p>
            </div>
            <div className='flex flex-col items-center'>
                <p className='text-base-bold'>1</p>
                <p className='text-tiny-medium'>Flower</p>
            </div>
            <div className='flex flex-col items-center'>
                <p className='text-base-bold'>1</p>
                <p className='text-tiny-medium'>Flowing</p>
            </div>
        </div>
        <hr/>
        <Menu/>
        <hr/>
        <div className='flex gap-4 items-center'>
            <UserButton/>
            <p className='text-light-1 text-body-bold'>Manage Account</p>
        </div>
        <SignedIn>
            <SignOutButton>
                <div className='flex cursor-pointer gap-4'>
                <Logout sx={{color: "white", fontSize:"32px"}}/>
                <p className='text-body-bold text-light-1'>Log Out</p>
                </div>
            </SignOutButton>
        </SignedIn>
      </div>
    </div>
  )
}

export default LeftSideBar
