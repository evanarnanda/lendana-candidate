'use client'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import React from 'react'
import { Button } from '@/components/ui/button'
import { SquarePen } from "lucide-react"


export default function AddressData() {
  return (
    <Card x-chunk="dashboard-profile-settings-address-data">
      <CardHeader>
        <div className='flex justify-between'>
          <div>
            <CardTitle>Address Data (KTP)</CardTitle>
            <CardDescription>
              Please input your Address data below based on the KTP.
            </CardDescription>
          </div>
          <Button variant="outline" size="icon">
            <SquarePen className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-rows-3 grid-flow-col gap-6">
          <div className="grid gap-3">
            <Label htmlFor="address">Address</Label>
            <h4>Jl. Kebon Jeruk 3 B37/10</h4>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="village">Village</Label> 
            <h4>Kelapa Gading Barat</h4>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="district">District</Label>
            <h4>Kelapa Gading</h4>
          </div>
          <div className="grid grid-rows-subgrid gap-4 row-span-2">
            <div className="row-start-2">
              <Label htmlFor="province">Province</Label>
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