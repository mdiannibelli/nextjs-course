import React from 'react'
import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'Page of about',
    keywords: ['About Page', 'Marcos', 'Información...'],
}
export default function AboutPage() {
  return (
    <div><span className='text-7xl'>About Page</span></div>
  )
}
