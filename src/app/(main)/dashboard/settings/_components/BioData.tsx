'use client'
import * as React from 'react'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import BioDataDialog from './BioDataDialog'

import { type RouterOutputs } from '@/trpc/shared'

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

interface BioDataProps {
  promises: Promise<[RouterOutputs["setting"]["myBioData"]]>;
}

export default function BioData({ promises }: BioDataProps) {
  /**
   * use is a React Hook that lets you read the value of a resource like a Promise or context.
   * @see https://react.dev/reference/react/use
   */
  const [bioData] = React.use(promises);



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
          <BioDataDialog data={bioData}/>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-rows-3 grid-flow-col gap-6">
          <div className="grid gap-3">
            <Label htmlFor="nik">NIK</Label>
            <h4>{bioData?.nik ? bioData.nik : "-"}</h4>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="fullname">Full Name</Label>
            <h4>{bioData?.fullname ? bioData.fullname : "-"}</h4>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="gender">Gender</Label>
            <h4>{bioData?.gender?.name ? bioData.gender.name : "-"}</h4>
          </div>
          <div className="grid grid-rows-subgrid gap-4 row-span-2">
            <div className="row-start-2">
              <Label htmlFor="bloodtype">Blood Type</Label>
              <h4>{bioData?.bloodtype?.name ? bioData.bloodtype.name : "-"}</h4>
            </div>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="mariedstatus">Maried Status</Label>
            <h4>{bioData?.maritalStatus?.name ? bioData.maritalStatus.name : "-"}</h4>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="place-dateofbirth">Place, Date of birth</Label>
            <h4>{bioData?.placeOfBirth?.name ? bioData.placeOfBirth.name : "-"}, {bioData?.dateofbirth ? bioData.dateofbirth : "-"}</h4>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="mariedstatus">Religion</Label>
            <h4>{bioData?.religion?.name ? bioData.religion.name : "-"}</h4>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="mariedstatus">Nationality</Label>
            <h4>{bioData?.nationality?.name ? bioData.nationality.name : "-"}</h4>
          </div>
        </div>
      </CardContent>
  </Card>
  )
}