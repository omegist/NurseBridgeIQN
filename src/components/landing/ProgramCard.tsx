
"use client"

import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ProgramCardProps {
  title: string
  description: string
  image: string
  dataAiHint: string
}

export function ProgramCard({ title, description, image, dataAiHint }: ProgramCardProps) {
  return (
    <Card className="text-left overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <Image src={image} alt={title} width={300} height={200} className="w-full h-auto" data-ai-hint={dataAiHint}/>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
        <CardDescription className="mt-2">{description}</CardDescription>
        <Button variant="outline" className="mt-4 w-full border-primary text-primary hover:bg-primary/10">
          Explore
        </Button>
      </CardContent>
    </Card>
  )
}
