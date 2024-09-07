'use client'
import * as React from 'react'
import { useEffect } from 'react'
import { useFormState } from "react-dom";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

import { CheckCircleIcon, SquarePen } from "lucide-react"

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

import { CalendarIcon, ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import clsx from 'clsx';
import { toast } from 'sonner';
import { type RouterOutputs } from '@/trpc/shared'


interface BioDataProps {
  data: RouterOutputs["setting"]["myBioData"];
}
export default function BioDataDialog({data}: BioDataProps) {

  const [formData, setFormData] = React.useState<{
    nik: string,
    fullname: string,
    dateofbirth?: Date 
  }>({
    nik: '',
    fullname: '',
  });

  const [selectData, setSelectData] = React.useState({
    gender: '0',
    bloodtype: '0',
    maritalstatus: '0',
    placeofbirth: '0',
    religion: '0',
    nationality: '0',
  });

  const setDate = (date: Date) => {
    setFormData((prevData) => ({
      ...prevData,
      dateofbirth: date
    }));
  }
  const [state, formAction] = useFormState(biodata, null);

  useEffect(() => {
    console.log(data)
    if (data) {
      setFormData({
        nik: data.nik,
        fullname: data.fullname,
        dateofbirth: data.dateofbirth ? new Date(data.dateofbirth) : undefined
      })
      setSelectData({
        gender: data.genderId ? data.genderId.toString() : '',
        bloodtype: data.bloodtypeId ? data.bloodtypeId.toString() : '',
        maritalstatus: data.maritalId ? data.maritalId.toString() : '',
        placeofbirth: data.placeofbirthId ? data.placeofbirthId.toString() : '',
        religion: data.religionId ? data.religionId.toString() : '',
        nationality: data.nationalityId ? data.nationalityId.toString() : '',
      })
    }


  }, [data])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, nameInput?: string) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
  };

  const onHandleSelect = (nameInput: string) => (value: string) => {
    setSelectData((prevData) => ({
      ...prevData,
      [nameInput]: value,
    }));
  };

  useEffect(() => {
    if (state?.success) {
      toast.success("Bio data saved!", {
        icon: <CheckCircleIcon className="h-5 w-5 text-success" />,
      });
    }
    if (state?.formError) {
      console.log(state?.formError)
      toast.error(state.formError, {
        icon: <ExclamationTriangleIcon className="h-5 w-5 text-destructive" />,
      });
    }
  }, [state]);




  return (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" size="icon">
        <SquarePen className="h-4 w-4"/>
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[500px] overflow-y-scroll max-h-screen lg: overflow-y-hidden">
      <DialogHeader>
        <DialogTitle>Edit bio data</DialogTitle>
        <DialogDescription>
          Make changes to your bio data. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
        <form action={formAction}>
          <div className="grid gap-2 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="nik" className="text-right">
                NIK
              </Label>
              <Input
                id="nik"
                name='nik'
                value={formData.nik}
                onChange={handleInputChange}
                type="number"
                placeholder="Enter your NIK"
                className={clsx("col-span-3", {"col-span-3 border-red-400": state?.fieldError?.nik})}
                />
                {state?.fieldError?.nik && (
                <>
                <span className='col-span-1'></span>
                <span className='col-span-3 text-left text-sm text-red-400'>{state?.fieldError?.nik}</span>
                </>
                )}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="fullname" className="text-right">
                Full Name
              </Label>
              <Input
                id="fullname"
                name='fullname'
                value={formData.fullname}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className={clsx("col-span-3", {"col-span-3 border-red-400": state?.fieldError?.fullname})}
              />
              {state?.fieldError?.fullname && (
                <>
                <span className='col-span-1'></span>
                <span className='col-span-3 text-left text-sm text-red-400'>{state?.fieldError?.fullname}</span>
                </>
                )}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="gender" className="text-right">
                Gender
              </Label>
              <Select 
              name='gender' 
              value={selectData.gender}
              onValueChange={onHandleSelect('gender')}
              >
                <SelectTrigger className={clsx("col-span-3", {"col-span-3 border-red-400": state?.fieldError?.gender})}>
                  <SelectValue placeholder="Select a gender" />
                </SelectTrigger>
                {state?.fieldError?.gender && (
                <>
                <span className='col-span-1'></span>
                <span className='col-span-3 text-left text-sm text-red-400'>{state?.fieldError?.gender}</span>
                </>
                )}
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Gender</SelectLabel>
                    <SelectItem value="1">Male</SelectItem>
                    <SelectItem value="2">Female</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="fullname" className="text-right">
                Blood Type
              </Label>
              <Select 
              name='bloodtype'
              value={selectData.bloodtype}
              onValueChange={onHandleSelect('bloodtype')}
              >
                <SelectTrigger className={clsx("col-span-3", {"col-span-3 border-red-400": state?.fieldError?.bloodtype})}>
                  <SelectValue placeholder="Select a blood type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Blood Type</SelectLabel>
                    <SelectItem value="1">A</SelectItem>
                    <SelectItem value="2">B</SelectItem>
                    <SelectItem value="3">AB</SelectItem>
                    <SelectItem value="4">O</SelectItem>
                    <SelectItem value="5">-</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="maritalstatus" className="text-right">
                Marital Status
              </Label>
              <Select 
              name='maritalstatus'
              value={selectData.maritalstatus}
              onValueChange={onHandleSelect('maritalstatus')}
              >
                <SelectTrigger className={clsx("col-span-3", {"col-span-3 border-red-400": state?.fieldError?.maritalstatus})}>
                  <SelectValue placeholder="Select a marital status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Marital Status</SelectLabel>
                    <SelectItem value="1">Single</SelectItem>
                    <SelectItem value="2">Married</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="fullname" className="text-right">
                Place of Birth
              </Label>
              <Select 
              name='placeofbirth'
              value={selectData.placeofbirth}
              onValueChange={onHandleSelect('placeofbirth')}
              >
                <SelectTrigger className={clsx("col-span-3", {"col-span-3 border-red-400": state?.fieldError?.placeofbirth})}>
                  <SelectValue placeholder="Select a place of birth" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Place of Birth</SelectLabel>
                    <SelectItem value="1">
                      Jakarta
                    </SelectItem>
                    <SelectItem value="2">
                      Surabaya
                    </SelectItem>
                    <SelectItem value="3">
                      Bandung
                    </SelectItem>
                    <SelectItem value="4">
                      Aceh
                    </SelectItem>
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
                    className={clsx(cn(
                      "col-span-3 justify-start text-left font-normal",
                      !formData.dateofbirth && "text-muted-foreground"
                    ), {"col-span-3 border-red-400": state?.fieldError?.dateofbirth})}
                    
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.dateofbirth ? format(formData.dateofbirth, "dd MMMM yyyy") : <span>Pick a date of birth</span>}
                  </Button>
                </PopoverTrigger>
                {state?.fieldError?.dateofbirth && (
                <>
                <span className='col-span-1'></span>
                <span className='col-span-3 text-left text-sm text-red-400'>{state?.fieldError?.dateofbirth}</span>
                </>
                )}
                <PopoverContent className="w-auto p-0" align="start" >
                  <Calendar
                    mode="single"
                    selected={formData.dateofbirth}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {formData.dateofbirth && (
                <Input type="hidden" 
                name="dateofbirth" 
                value={format(formData.dateofbirth, 'yyyy-MM-dd')} 
                onChange={handleInputChange} />
              )}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="fullname" className="text-right">
                Religion
              </Label>
              <Select 
              name='religion'
              value={selectData.religion}
              onValueChange={onHandleSelect('religion')}
              >
                <SelectTrigger className={clsx("col-span-3", {"col-span-3 border-red-400": state?.fieldError?.religion})}>
                  <SelectValue placeholder="Select a religion" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Religion</SelectLabel>
                    <SelectItem value="1">Islam</SelectItem>
                    <SelectItem value="2">Catholic</SelectItem>
                    <SelectItem value="3">Christianity</SelectItem>
                    <SelectItem value="4">Buddhism</SelectItem>
                    <SelectItem value="5">Hinduism</SelectItem>
                    <SelectItem value="6">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="fullname" className="text-right">
                Nationality
              </Label>
              <Select 
              name='nationality'
              value={selectData.nationality}
              onValueChange={onHandleSelect('nationality')}
              >
                <SelectTrigger className={clsx("col-span-3", {"col-span-3 border-red-400": state?.fieldError?.nationality})}>
                  <SelectValue placeholder="Select a nationality" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Nationality</SelectLabel>
                    <SelectItem value="1">Indonesia</SelectItem>
                    <SelectItem value="2">Malaysia</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter className='mt-4 gap-4'>
            <DialogClose asChild>
              <Button type="button" className='bg-red-500 hover:bg-red-600 text-white'>
                Cancel
              </Button>
            </DialogClose>
            <SubmitButton className="w-full" aria-label="submit-btn">
              Save
            </SubmitButton>
          </DialogFooter>
        </form>
      </DialogContent>
  </Dialog>
  )
}