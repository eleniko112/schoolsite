"use client"

import * as React from 'react'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Activity, Book, Calendar, Home, Image, Phone, Users } from "lucide-react"

import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { cn } from '@/lib/utils'

const links = [
  { href: "/", label: "მთავარი", icon: Home },
  { href: "/classes", label: "კლასები", icon: Users },
  { href: "/schedule", label: "განრიგი", icon: Calendar },
  { href: "/calendar", label: "კალენდარი", icon: Book },
  { href: "/activities", label: "აქტივობები", icon: Activity },
  { href: "/gallery", label: "გალერეა", icon: Image },
  { href: "/contact", label: "კონტაქტი", icon: Phone },
]

export function MainNav() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === href;
    return pathname.startsWith(href);
  }

  return (
    <SidebarMenu>
      {links.map((link) => (
        <SidebarMenuItem key={link.href}>
          <Link href={link.href}>
            <SidebarMenuButton
              isActive={isActive(link.href)}
              className="group"
              tooltip={{
                children: link.label,
                className: "bg-sidebar-accent text-sidebar-accent-foreground"
              }}
            >
              <link.icon className={cn(
                "h-5 w-5 transition-colors group-hover:text-sidebar-accent-foreground",
                isActive(link.href) ? "text-sidebar-accent-foreground" : "text-sidebar-foreground/70"
              )} />
              <span>{link.label}</span>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
