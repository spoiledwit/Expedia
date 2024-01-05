import React from 'react'
import AdminSidebar from '@/components/Admin/Sidebar.tsx'

export default function Layout({
    children,
  }: {
    children: React.ReactNode;
  }) {

  return (
    <div className='flex'>
        <AdminSidebar />
        {children}
    </div>
  )
}