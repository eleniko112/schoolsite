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
import { Award, Beaker, Drama, Heart, Users } from 'lucide-react';

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
              <CardTitle>მომავალი ღონისძიებები</CardTitle>
              <CardDescription>არ გამოტოვოთ, რა გველის!</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                <li>სკოლის ყოველწლიური ბაზრობა - 10 ივნისი</li>
                <li>მშობელთა კრებები - 18 ივნისი</li>
                <li>საზაფხულო ბანაკის რეგისტრაცია იწყება - 1 ივლისი</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>ექსკურსიები</CardTitle>
              <CardDescription>აღმოაჩინე კლასის მიღმა.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                <li>ვიზიტი ეროვნულ მუზეუმში</li>
                <li>გასვლა ბოტანიკურ ბაღში</li>
                <li>ლაშქრობა მთაწმინდის პარკში</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>სკოლის შიდა აქტივობები</CardTitle>
              <CardDescription>ჩვენი საზოგადოების მშენებლობა.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                <li>მართლწერის კონკურსი</li>
                <li>ჭადრაკის ტურნირი</li>
                <li>დებატების კლუბის ფინალი</li>
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
            <AccordionTrigger>საგნობრივი კლუბები</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-4 pt-2 md:grid-cols-4">
                <div className="flex items-center gap-2">
                  <Beaker className="h-5 w-5 text-primary" /> მეცნიერების კლუბი
                </div>
                <div className="flex items-center gap-2">
                  <Drama className="h-5 w-5 text-primary" /> ლიტერატურის კლუბი
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" /> ისტორიის
                  მოყვარულები
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" /> მათემატიკოსები
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>STEM / ხელოვნება / სპორტი</AccordionTrigger>
            <AccordionContent>
              ჩვენი სკოლა გთავაზობთ დაბალანსებულ მიდგომას განათლებისადმი, რომელიც
              ხელს უწყობს მოსწავლეებს გამოიკვლიონ თავიანთი ინტერესები
              მეცნიერებაში, ტექნოლოგიაში, ინჟინერიასა და მათემატიკაში (STEM),
              ასევე ხელოვნებასა და სპორტში. ჩვენ გვჯერა, რომ ვზრდით მრავალმხრივ
              პიროვნებებს.
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
              <CardTitle>მოსწავლეთა საუკეთესო ნამუშევრები</CardTitle>
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
              <CardTitle>მოსწავლეთა სტატიები</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">ჩემი მოგზაურობა რობოტიკაში</h3>
                <p className="text-sm text-muted-foreground">
                  ავტორი: ლილე, X კლასი - მიმოხილვა ჩვენი რობოტიკის კლუბის
                  საინტერესო სამყაროში...
                </p>
              </div>
              <div>
                <h3 className="font-semibold">მოთხრობის ძალა</h3>
                <p className="text-sm text-muted-foreground">
                  ავტორი: სანდრო, VIII კლასი - როგორ დამეხმარა შემოქმედებითი
                  წერა საკუთარი ხმის პოვნაში...
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
              კვირის მასწავლებელი
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
                "ეკატერინემ განსაკუთრებული თავდადება გამოიჩინა მოსწავლეების
                რეგიონული მათემატიკის კონკურსისთვის მომზადებაში. მისი
                ინოვაციური სწავლების მეთოდებმა მათემატიკა ყველასთვის საინტერესო
                საგნად აქცია."
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
