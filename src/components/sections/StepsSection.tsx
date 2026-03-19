'use client'

import { motion } from 'framer-motion'
import { Globe, Bot, LineChart, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    color: 'from-antuario-green to-antuario-cyan',
    accent: 'antuario-green',
    title: 'Construimos todo lo que tu empresa necesita para atraer clientes',
    copy: 'Creamos tu página web profesional, campañas de Google para que te encuentren quienes ya buscan lo que ofreces, y configuramos agentes de inteligencia artificial que trabajan para ti desde el primer día. Tú no tienes que preocuparte por nada técnico — `�osotros lo armamos todo.',
    visual: (
      <div className="relative">
        <div className="flex items-center justify-center gap-5 rounded-[28px] border border-border bg-white p-8 shadow-card-3d">