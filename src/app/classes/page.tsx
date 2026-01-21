import Link from 'next/link';
import { schoolData } from '@/app/lib/data';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function ClassesPage() {
  const classes = schoolData.classes;

  return (
    <div className="container mx-auto">
      <h2 className="mb-8 font-headline text-3xl font-bold tracking-tight md:text-4xl">
        კლასები
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {classes.map((c) => (
          <Link href={`/classes/${c.id}`} key={c.id}>
            <Card className="group flex h-full transform flex-col border border-primary/20 bg-primary/10 text-primary-foreground transition-all duration-300 hover:scale-105 hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-card-foreground">
                  {c.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow"></CardContent>
              <div className="flex items-center justify-end p-6 pt-0">
                <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
