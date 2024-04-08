'use client';
import Link from 'next/link'
import React from 'react'
import style from './ActiveLink.module.css'
import { usePathname } from 'next/navigation'
interface Props{
    path: string,
    text: string,
    key: number
}

export default function ActiveLink({path,text, key} : Props) {
  const pathName = usePathname()
  return (
    <Link
    className={`${style.link} ${(pathName === path)  ? style['active-link'] : ''}`}
    key={key} href={path}>{text}</Link>
  )
}
