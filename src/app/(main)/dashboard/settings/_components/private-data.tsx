'use client'
import React from 'react'
import BioData from './bio-data'
import AddressData from './address-data'
import type { User } from 'lucia'


export default function PrivateData() {
  return (
    <div className='grid gap-4'>
      <BioData  />
      <AddressData  />
    </div>
  )
}