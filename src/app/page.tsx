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
      title: 'წლიური სპორტული დღე',
      description: 'გართობის, თამაშებისა და ჯანსაღი შეჯიბრის დღე.',
      image: PlaceHolderImages.find((img) => img.id === 'gallery-4'),
    },
    {
      title: 'სამეცნიერო ოლიმპიადის გამარჯვებულები',
      description:
        'ჩვენმა მოსწავლეებმა ეროვნული სამეცნიერო ოლიმპიადიდან მედლები ჩამოიტანეს.',
      image: PlaceHolderImages.find((img) => img.id === 'gallery-6'),
    },
    {
      title: 'ხელოვნების გამოფენა "გაზაფხულის ფერები"',
      description:
        'წარმოგიდგენთ ჩვენი დამწყები ხელოვანების წარმოუდგენელ ნიჭს.',
      image: PlaceHolderImages.find((img) => img.id === 'gallery-5'),
    },
  ];

  const testimonials = [
    {
      name: 'ნინო',
      role: 'მშობელი',
      quote:
        'სკოლას საოცარი გარემო აქვს. ჩემი შვილი ძალიან გაიზარდა, როგორც აკადემიურად, ისე პიროვნულად.',
    },
    {
      name: 'გიორგი',
      role: 'მოსწავლე, XI კლასი',
      quote:
        'მასწავლებლები წარმოუდგენლად მხარდამჭერები არიან და სწავლას ხალისიანს ხდიან. მომწონს, რომ მრავალფეროვან კლუბებში შეგვიძლია გაწევრიანება.',
    },
    {
      name: 'ელენე',
      role: 'მშობელი',
      quote:
        'ძალიან კმაყოფილები ვართ განათლების ხარისხითა და სკოლის ერთგულებით მოსწავლეთა კეთილდღეობისადმი.',
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header Section */}
      <header className="rounded-lg bg-card p-8 text-center shadow">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
          ფოთის სკოლის ჰაბი
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          სწავლის, ზრდისა და აღმოჩენების ადგილი
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-lg">
          კეთილი იყოს თქვენი მობრძანება ჩვენს სკოლაში, სადაც ჩვენ ვცდილობთ
          შევქმნათ მზრუნველი და მასტიმულირებელი გარემო მოსწავლეების
          წარმატებისთვის.
        </p>
      </header>

      {/* Quick Information Section */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Link href="/schedule">
          <Card className="h-full bg-primary/5 transition-shadow hover:shadow-lg">
            <CardHeader className="flex-row items-center gap-4">
              <Clock className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-2xl">
                გაკვეთილების ცხრილი
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                იხილეთ დღის და კვირის გაკვეთილების ცხრილი.
              </p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/calendar">
          <Card className="h-full bg-primary/5 transition-shadow hover:shadow-lg">
            <CardHeader className="flex-row items-center gap-4">
              <Calendar className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-2xl">
                აკადემიური კალენდარი
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                იყავით განახლებული სკოლის მნიშვნელოვანი თარიღებისა და
                არდადეგების შესახებ.
              </p>
            </CardContent>
          </Card>
        </Link>
        <Card className="h-full bg-primary/5 transition-shadow hover:shadow-lg">
          <CardHeader className="flex-row items-center gap-4">
            <Newspaper className="h-8 w-8 text-primary" />
            <CardTitle className="font-headline text-2xl">
              მნიშვნელოვანი თარიღები
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
            <Link href="/contact">დაგვიკავშირდით</Link>
          </Button>
          <Button variant="outline" size="lg">
            ელექტრონული ჟურნალი
          </Button>
          <Button variant="outline" size="lg">
            განცხადებები
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
            <Card key={testimonial.name} className="bg-primary/5">
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
          <span>9 აპრილის ქ., ფოთი, საქართველო</span>
        </div>
        <div className="flex justify-center gap-4">
          <Link href="#" className="hover:text-primary">
            Facebook
          </Link>
          <Link href="#" className="hover:text-primary">
            Instagram
          </Link>
          <Link href="#" className="hover:text-primary">
            LinkedIn
          </Link>
        </div>
        <p>
          &copy; {new Date().getFullYear()} ფოთის სკოლის ჰაბი. ყველა უფლება
          დაცულია.
        </p>
      </footer>
    </div>
  );
}
