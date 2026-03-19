'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
  className?: string
  as?: 'section' | 'div'
}

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function SectionWrapper({
  children,
  id,
  className,
  as = 'section',
}: SectionWrapperProps) {
  const Component = motion[as]

  return (
    <Component
      id={id}
      className={cn('relative py-20 px-4 sm:px-6 lg:px-8 md:py-28', className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={sectionVariants}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </Component>
  
(#Š("t