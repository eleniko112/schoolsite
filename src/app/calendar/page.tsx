import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { schoolData } from '../lib/data';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { List } from 'lucide-react';

export default function CalendarPage() {
  const importantDates = schoolData.importantDates;

  return (
    <div className="space-y-8">
      <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
        კალენდარი
      </h2>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-2 md:p-6">
              <Calendar
                className="w-full"
                classNames={{
                  months:
                    'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
                  month: 'space-y-4 w-full',
                  table: 'w-full border-collapse space-y-1',
                  head_row: 'flex justify-around',
                  row: 'flex w-full mt-2 justify-around',
                }}
              />
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                <List className="h-6 w-6 text-primary" />
                მნიშვნელოვანი თარიღები
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {importantDates.map((event, index) => (
                  <li key={index}>
                    <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4">
                      <Badge variant="secondary" className="whitespace-nowrap">
                        {new Date(event.date).toLocaleDateString('ka-GE', {
                          month: 'long',
                          day: 'numeric',
                        })}
                      </Badge>
                      <p className="text-sm">{event.description}</p>
                    </div>
                    {index < importantDates.length - 1 && (
                      <Separator className="my-4" />
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
