'use client'
import React from 'react'
import PersonalData from './personal-data'
import AddressData from './address-data'
import type { User } from 'lucia'


export default function PrivateData() {
  return (
    <div className='grid gap-4'>
      <PersonalData  />
      <AddressData  />
    </div>
  )
}