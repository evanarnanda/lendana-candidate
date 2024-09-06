import * as React from 'react'
import BioData from './BioData'
import AddressData from './AddressData'

import { BioDataSkeleton } from './BioDataSkeleton';

import { api } from '@/trpc/server';




export default function PrivateData() {
    /**
   * Passing multiple promises to `Promise.all` to fetch data in parallel to prevent waterfall requests.
   * Passing promises to the `Posts` component to make them hot promises (they can run without being awaited) to prevent waterfall requests.
   * @see https://www.youtube.com/shorts/A7GGjutZxrs
   * @see https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#parallel-data-fetching
   */
    const promises = Promise.all([
      api.setting.myBioData.query(),
  
    ]);
  return (
    <div className='grid gap-4'>
      <React.Suspense fallback={<BioDataSkeleton />}>
        <BioData promises={promises} />
        {/* <AddressData  /> */}

      </React.Suspense>
    </div>
  )
}