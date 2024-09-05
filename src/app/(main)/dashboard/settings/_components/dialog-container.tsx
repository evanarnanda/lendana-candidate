'use client'

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { SquarePen } from "lucide-react"

interface Props {
  children: React.ReactNode
}

export default function DialogContainer( { children }: Props ) {
  return (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" size="icon">
        <SquarePen className="h-4 w-4"/>
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Edit bio data</DialogTitle>
        <DialogDescription>
          Make changes to your bio data. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <form action="">
        {children}
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </form>
      </DialogContent>
  </Dialog>
  )
}