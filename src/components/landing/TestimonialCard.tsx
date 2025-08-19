
"use client"

import Image from 'next/image'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

interface TestimonialCardProps {
  name: string
  role: string
  testimonial: string
  image: string
  dataAiHint: string
}

export function TestimonialCard({ name, role, testimonial, image, dataAiHint }: TestimonialCardProps) {
  return (
    <Card className="text-center p-6 shadow-lg h-full">
      <CardHeader className="flex flex-col items-center">
        <Image src={image} alt={name} width={80} height={80} className="rounded-full mb-4" data-ai-hint={dataAiHint}/>
        <h4 className="font-bold">{name}</h4>
        <p className="text-sm text-muted-foreground">{role}</p>
      </CardHeader>
      <CardContent>
        <p>"{testimonial}"</p>
      </CardContent>
    </Card>
  )
}
