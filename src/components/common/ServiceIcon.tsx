'use client'

import {
  Search,
  Target,
  Code2,
  MessageSquare,
  Palette,
  Cpu,
  Sparkles,
} from 'lucide-react'
import type { ServiceIconKey } from '@/lib/services-data'

const ICON_MAP = {
  search: Search,
  target: Target,
  code: Code2,
  social: MessageSquare,
  palette: Palette,
  cpu: Cpu,
  ai: Sparkles,
} as const

export function ServiceIcon({
  iconKey,
  className,
  style,
}: {
  iconKey: ServiceIconKey
  className?: string
  style?: React.CSSProperties
}) {
  const Icon = ICON_MAP[iconKey] ?? Sparkles
  return <Icon className={className} style={style} />
}
