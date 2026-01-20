import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { schoolData } from './lib/data';
import { Calendar, Clock, Newspaper, Phone, Pin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  const news = [
    {
      title: 'Annual Sports Day',
      description: 'A day of fun, games, and healthy competition.',
      image: PlaceHolderImages.find((img) => img.id === 'gallery-4'),
    },
    {
      title: 'Science Olympiad Winners',
      description:
        'Our students brought home medals from the National Science Olympiad.',
      image: PlaceHolderImages.find((img) => img.id === 'gallery-6'),
    },
    {
      title: 'Art Exhibition "Colors of Spring"',
      description:
        'Showcasing the incredible talent of our budding artists.',
      image: PlaceHolderImages.find((img) => img.id === 'gallery-5'),
    },
  ];

  const testimonials = [
    {
      name: 'Nino',
      role: 'Parent',
      quote:
        'The school has a wonderful environment. My child has grown so much, both academically and personally.',
    },
    {
      name: 'Giorgi',
      role: 'Student, 11th Grade',
      quote:
        'The teachers are incredibly supportive and they make learning fun. I love the variety of clubs we can join.',
    },
    {
      name: 'Elene',
      role: 'Parent',
      quote:
        "We are very impressed with the quality of education and the school's commitment to student well-being.",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header Section */}
      <header className="rounded-lg bg-card p-8 text-center shadow">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
          Poti School Hub
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          სწავლის, ზრდისა და აღმოჩენების ადგილი
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-lg">
          Welcome to our school, where we are dedicated to providing a nurturing
          and stimulating environment for students to excel.
        </p>
      </header>

      {/* Quick Information Section */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Link href="/schedule">
          <Card className="h-full transition-shadow hover:shadow-lg">
            <CardHeader className="flex-row items-center gap-4">
              <Clock className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-2xl">
                Class Timetable
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                View the daily and weekly class schedules.
              </p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/calendar">
          <Card className="h-full transition-shadow hover:shadow-lg">
            <CardHeader className="flex-row items-center gap-4">
              <Calendar className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-2xl">
                Academic Calendar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Stay updated on important school dates and holidays.
              </p>
            </CardContent>
          </Card>
        </Link>
        <Card className="h-full transition-shadow hover:shadow-lg">
          <CardHeader className="flex-row items-center gap-4">
            <Newspaper className="h-8 w-8 text-primary" />
            <CardTitle className="font-headline text-2xl">
              Important Dates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              {schoolData.importantDates.slice(0, 2).map((event) => (
                <li key={event.date} className="flex items-center gap-2">
                  <span className="font-semibold">
                    {new Date(event.date).toLocaleDateString('ka-GE', {
                      month: 'short',
                      day: 'numeric',
                    })}
                    :
                  </span>
                  <span className="text-muted-foreground">
                    {event.description}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* News Section */}
      <section className="space-y-6">
        <h2 className="font-headline text-3xl font-bold">სიახლეები</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {news.map((item) => (
            <Card key={item.title} className="overflow-hidden">
              {item.image && (
                <Image
                  src={item.image.imageUrl}
                  alt={item.image.description}
                  width={600}
                  height={400}
                  className="h-48 w-full object-cover"
                  data-ai-hint={item.image.imageHint}
                />
              )}
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="space-y-6">
        <h2 className="font-headline text-3xl font-bold">სწრაფი ბმულები</h2>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button variant="secondary" size="lg">
            Electronic Journal
          </Button>
          <Button variant="secondary" size="lg">
            Announcements
          </Button>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="space-y-6">
        <h2 className="font-headline text-3xl font-bold">
          რას ამბობენ ჩვენზე
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <CardContent className="p-6">
                <blockquote className="border-l-2 border-primary pl-4 text-lg italic">
                  {testimonial.quote}
                </blockquote>
                <div className="mt-4 flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <Separator />

      {/* Footer */}
      <footer className="space-y-4 text-center text-muted-foreground">
        <div className="flex items-center justify-center gap-2">
          <Phone className="h-4 w-4" />
          <span>+995 123 456 789</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Pin className="h-4 w-4" />
          <span>9 April St, Poti, Georgia</span>
        </div>
        <div className="flex justify-center gap-4">
            <Link href="#" className="hover:text-primary">Facebook</Link>
            <Link href="#" className="hover:text-primary">Instagram</Link>
            <Link href="#" className="hover:text-primary">LinkedIn</Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Poti School Hub. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
