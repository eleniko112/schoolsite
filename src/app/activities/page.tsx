import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { schoolData } from '../lib/data';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Award, Beaker, Brush, Drama, Heart, Mic, Palette, Users } from 'lucide-react';

export default function ActivitiesPage() {
  const teacherOfTheWeek = schoolData.teachers['5']; // Ekaterine

  return (
    <div className="space-y-12">
      <h1 className="font-headline text-4xl font-bold">აქტივობები</h1>

      {/* Events Section */}
      <section className="space-y-6">
        <h2 className="font-headline text-3xl font-bold">ღონისძიებები</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Don't miss out on what's next!</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                <li>Annual School Fair - June 10th</li>
                <li>Parent-Teacher Meetings - June 18th</li>
                <li>Summer Camp Registrations Open - July 1st</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Excursions</CardTitle>
              <CardDescription>Exploring beyond the classroom.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                <li>Visit to the National Museum</li>
                <li>Botanical Garden Trip</li>
                <li>Hiking day at Mtatsminda Park</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Internal School Activities</CardTitle>
              <CardDescription>Building our community.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                <li>Spelling Bee Competition</li>
                <li>Chess Tournament</li>
                <li>Debate Club Finals</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Academic Section */}
      <section className="space-y-6">
        <h2 className="font-headline text-3xl font-bold">აკადემიური სექცია</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Subject Clubs</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-4 pt-2 md:grid-cols-4">
                <div className="flex items-center gap-2">
                  <Beaker className="h-5 w-5 text-primary" /> Science Club
                </div>
                <div className="flex items-center gap-2">
                  <Drama className="h-5 w-5 text-primary" /> Literature Club
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" /> History Buffs
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" /> Mathletes
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>STEM / Arts / Sports</AccordionTrigger>
            <AccordionContent>
              Our school offers a balanced approach to education, encouraging
              students to explore their interests in Science, Technology,
              Engineering, and Math (STEM), as well as in the Arts and Sports.
              We believe in nurturing well-rounded individuals.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Student Corner */}
      <section className="space-y-6">
        <h2 className="font-headline text-3xl font-bold">მოსწავლის კუთხე</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Best Student Works</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Image
                src={PlaceHolderImages[4].imageUrl}
                alt={PlaceHolderImages[4].description}
                width={400}
                height={300}
                className="rounded-lg object-cover"
                data-ai-hint={PlaceHolderImages[4].imageHint}
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Student Articles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">My Journey in Robotics</h3>
                <p className="text-sm text-muted-foreground">
                  By Lile, 10th Grade - A look into the exciting world of our
                  robotics club...
                </p>
              </div>
              <div>
                <h3 className="font-semibold">The Power of a Story</h3>
                <p className="text-sm text-muted-foreground">
                  By Sandro, 8th Grade - How creative writing helped me find my
                  voice...
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Teachers' Section */}
      <section className="space-y-6">
        <h2 className="font-headline text-3xl font-bold">მასწავლებლები</h2>
        <Card className="bg-gradient-to-r from-primary/10 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-6 w-6 text-amber-500" />
              Teacher of the Week
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-6">
            <Avatar className="h-20 w-20">
              <AvatarFallback className="text-3xl">
                {teacherOfTheWeek.firstName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-2xl font-semibold">
                {teacherOfTheWeek.firstName} {teacherOfTheWeek.lastName}
              </h3>
              <p className="text-lg text-muted-foreground">
                V კლასის დამრიგებელი
              </p>
              <p className="mt-2 italic">
                "Ekaterine has shown exceptional dedication in preparing her
                students for the regional math competition. Her innovative
                teaching methods have made mathematics an exciting subject for
                everyone."
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
