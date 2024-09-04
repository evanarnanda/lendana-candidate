'use client'
import React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface Props {
  Page1: React.ReactNode,
  Page2: React.ReactNode,
  Page1ButtonText: string
  Page2ButtonText: string
  defaultPage?: string
}

export default function TabSwitcher(props: Props) {
  props.defaultPage = props.defaultPage || 'page1'
  return (
    <Tabs className='max-w-[500px]' defaultValue={props.defaultPage}>
      <TabsList>
        <TabsTrigger value="page1">{props.Page1ButtonText}</TabsTrigger>
        <TabsTrigger value="page2">{props.Page2ButtonText}</TabsTrigger>
      </TabsList>
      <TabsContent value="page1">
        {props.Page1}
      </TabsContent>
      <TabsContent value="page2">
        {props.Page2}
      </TabsContent>
    </Tabs>
  )
}