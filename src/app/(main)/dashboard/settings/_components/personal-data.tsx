'use client'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'

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
export default function PersonalData() {
  return (
    <Card x-chunk="dashboard-profile-settings-personal-data">
    <CardHeader>
      <CardTitle>Personal Data (KTP)</CardTitle>
      <CardDescription>
        Please input your personal data below based on the KTP.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="nik">NIK</Label>
          <Input
            id="nik"
            type="text"
            className="w-full"
            placeholder='3574400121231'
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="fullname">Full Name</Label>
          <Input
            id="fullname"
            type="text"
            className="w-full"
            placeholder='Kunto Aji'
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="gender">Gender</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Gender</SelectLabel>
                {genderItem.map((item) => (
                  <SelectItem value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-3">
          <Label htmlFor="bloodtype">Blood Type</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a blood type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Blood type</SelectLabel>
                {bloodTypeItem.map((item) => (
                  <SelectItem value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-3">
          <Label htmlFor="mariedstatus">Maried Status</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a maried status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Maried Status</SelectLabel>
                {mariedStatusItem.map((item) => (
                  <SelectItem value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </CardContent>
  </Card>
  )
}