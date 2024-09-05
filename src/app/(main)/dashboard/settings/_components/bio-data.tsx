
'use client'
import React from 'react'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import BioDataDialog from './bio-data-dialog'
import { Input } from '@/components/ui/input'

import type { User } from 'lucia';

// put this to db please
const genderItem = [
  {
    label: 'Male',
    value: 'male'
  },
  {
    label: 'Female',
    value: 'female'
  },
]

const bloodTypeItem = [
  {
    label: 'A+',
    value: 'A+'
  },
  {
    label: 'A-',
    value: 'A-'
  },
  {
    label: 'B+',
    value: 'B+'
  },
  {
    label: 'B-',
    value: 'B-'
  },
  {
    label: 'AB+',
    value: 'AB+'
  },
  {
    label: 'AB-',
    value: 'AB-'
  },
  {
    label: 'O+',
    value: 'O+'
  },
  {
    label: 'O-',
    value: 'O-'
  }
]

const mariedStatusItem = [
  {
    label: 'Married',
    value: 'married'
  },
  {
    label: 'Single',
    value: 'single'
  },
]



export default function BioData() {
  return (
    <Card x-chunk="dashboard-profile-settings-personal-data">
      <CardHeader>
        <div className='flex justify-between'>
          <div>
            <CardTitle>Bio Data (KTP)</CardTitle>
            <CardDescription>
              Please input your Bio data below based on the KTP.
            </CardDescription>
          </div>
          <BioDataDialog/>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-rows-3 grid-flow-col gap-6">
          <div className="grid gap-3">
            <Label htmlFor="nik">NIK</Label>
            <h4>3574400121231</h4>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="fullname">Full Name</Label>
            <h4>Kunto Aji</h4>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="gender">Gender</Label>
            <h4>Male</h4>
          </div>
          <div className="grid grid-rows-subgrid gap-4 row-span-2">
            <div className="row-start-2">
              <Label htmlFor="bloodtype">Blood Type</Label>
              <h4>A+</h4>
            </div>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="mariedstatus">Maried Status</Label>
            <h4>Married</h4>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="place-dateofbirth">Place, Date of birth</Label>
            <h4>Jogjakarta, 20-01-2001</h4>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="mariedstatus">Religion</Label>
            <h4>Islam</h4>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="mariedstatus">Nationality</Label>
            <h4>Indonesia</h4>
          </div>
        </div>
      </CardContent>
  </Card>
  )
}