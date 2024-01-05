import React from 'react'
import { QueriesTable } from '@/components/Admin/Queries/Table';

const page = () => {
  return (
    <div
    className='p-8'
    style={{ overflowX: 'auto' }} 
    >
      <h1
      className='text-2xl font-semibold mb-4'
      >
        Website Leads
      </h1>
      <QueriesTable />
    </div>
  )
}

export default page;