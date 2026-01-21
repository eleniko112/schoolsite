import { schoolData } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
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
import { CalendarDays, Phone, User } from 'lucide-react';

type ClassPageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  return schoolData.classes.map((c) => ({
    id: c.id,
  }));
}

export default function ClassPage({ params }: ClassPageProps) {
  const classId = params.id;
  const classInfo = schoolData.classes.find((c) => c.id === classId);
  const teacher = (schoolData.teachers as any)[classId];
  const students = (schoolData.students as any)[classId];
  const schedule = schoolData.schedule;

  if (!classInfo || !teacher || !students) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
        {classInfo.name}
      </h2>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline text-2xl">
            <User className="h-6 w-6 text-primary" />
            დამრიგებელი
          </CardTitle>
          <CardDescription>
            {teacher.firstName} {teacher.lastName}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>{teacher.phone}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">მოსწავლეები</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">#</TableHead>
                <TableHead>სახელი</TableHead>
                <TableHead>გვარი</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map(
                (
                  student: {
                    id: string;
                    firstName: string;
                    lastName: string;
                  },
                  index: number
                ) => (
                  <TableRow key={student.id}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>{student.firstName}</TableCell>
                    <TableCell>{student.lastName}</TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline text-2xl">
            <CalendarDays className="h-6 w-6 text-primary" />
            გაკვეთილების განრიგი
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">დღე</TableHead>
                <TableHead>გაკვეთილები</TableHead>
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
