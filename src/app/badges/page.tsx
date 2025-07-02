"use client"

import { badges } from '@/data/badges';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function BadgesPage() {
  const router = useRouter();

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col sm:relative items-center sm:justify-center mb-10 gap-4 sm:gap-0">
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full flex justify-start sm:absolute sm:left-0 sm:top-1/2 sm:-translate-y-1/2"
        >
            <Button variant="outline" onClick={() => router.push('/')}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
            </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold font-headline mb-2">
            Your Badges
          </h1>
          <p className="text-muted-foreground">
            Collect badges as you learn and master new topics.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {badges.map((badge, index) => (
          <motion.div
            key={badge.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
            className="group"
          >
            <Card className="h-full flex flex-col items-center text-center p-6 shadow-2xl rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-accent transition-all duration-300">
              <CardHeader className="p-0">
                <div className={cn("mb-4 rounded-full p-5 w-24 h-24 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-[0_0_20px] group-hover:shadow-accent/50", badge.bgColor)}>
                  <badge.icon className={cn("w-12 h-12", badge.color)} />
                </div>
                <CardTitle className="font-headline text-xl">{badge.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-2 flex-grow">
                <CardDescription>
                  {badge.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
