'use client'

import React from 'react'
import { useFormState } from "react-dom";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

import { SquarePen } from "lucide-react"

import { biodata } from "@/lib/auth/actions";
import { SubmitButton } from '@/components/submit-button';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"

import { cn } from "@/lib/utils"

export default function BioDataDialog( ) {
  const [date, setDate] = React.useState<Date>()
  const [state, formAction] = useFormState(biodata, null);

  return (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" size="icon">
        <SquarePen className="h-4 w-4"/>
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[500px]">
      <DialogHeader>
        <DialogTitle>Edit bio data</DialogTitle>
        <DialogDescription>
          Make changes to your bio data. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <form action={formAction}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="nik" className="text-right">
              NIK
            </Label>
            <Input
              id="nik"
              name='nik'
              type="number"
              placeholder="Enter your NIK"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="fullname" className="text-right">
              Full Name
            </Label>
            <Input
              id="fullname"
              name='fullname'
              placeholder="Enter your full name"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="gender" className="text-right">
              Gender
            </Label>
            <Select name='gender'>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Gender</SelectLabel>
                  
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="fullname" className="text-right">
              Blood Type
            </Label>
            <Select name='bloodtype'>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a blood type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Blood Type</SelectLabel>
                  
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="maritalstatus" className="text-right">
              Marital Status
            </Label>
            <Select name='maritalstatus'>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a marital status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Marita Status</SelectLabel>
                  
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="fullname" className="text-right">
              Place of Birth
            </Label>
            <Select name='placeofbirth'>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a place of birth" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Place of Birth</SelectLabel>
                  
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="fullname" className="text-right">
              Date of Birth
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "col-span-3 justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                  name='dateofbirth'
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "dd MMMM yyyy") : <span>Pick a date of birth</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start" >
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="fullname" className="text-right">
              Religion
            </Label>
            <Select name='religion'>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a religion" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Religion</SelectLabel>
                  
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="fullname" className="text-right">
              Nationality
            </Label>
            <Select name='nationality'>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a nationality" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Nationality</SelectLabel>
                  
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className='grid grid-cols-4 items-center gap-4'>
            {state?.fieldError ? (
              <ul className="col-span-4 list-disc space-y-1 rounded-lg border bg-destructive/10 p-2 text-[0.8rem] font-medium text-destructive">
                {Object.values(state.fieldError).map((err) => (
                  <li className="ml-4" key={err}>
                    {err}
                  </li>
                ))}
              </ul>
            ) : state?.formError ? (
              <p className="col-span-4 rounded-lg border bg-destructive/10 p-2 text-[0.8rem] font-medium text-destructive">
                {state?.formError}
              </p>
            ) : null}
          </div>
        <DialogFooter className='mt-4'>
          <SubmitButton className="w-full" aria-label="submit-btn">
            Save
          </SubmitButton>
        </DialogFooter>
      </form>
      </DialogContent>
  </Dialog>
  )
}