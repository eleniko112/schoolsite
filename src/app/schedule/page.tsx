import { schoolData } from '@/app/lib/data';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function SchedulePage() {
  const schedule = schoolData.schedule;

  return (
    <div className="space-y-8">
      <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
        გაკვეთილების განრიგი
      </h2>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px] font-headline text-lg">
                  დღე
                </TableHead>
                <TableHead className="font-headline text-lg">
                  გაკვეთილები
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schedule.map((dayInfo) => (
                <TableRow key={dayInfo.day}>
                  <TableCell className="font-medium">{dayInfo.day}</TableCell>
                  <TableCell>{dayInfo.subjects.join(' • ')}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
