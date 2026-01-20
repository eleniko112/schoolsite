import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, Pin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <h1 className="font-headline text-4xl font-bold">კონტაქტი</h1>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>საკონტაქტო ინფორმაცია</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Pin className="h-6 w-6 text-primary" />
                <p>9 აპრილის ქ., ფოთი, საქართველო</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <p>+995 123 456 789</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <p>info@potischool.edu.ge</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>სამუშაო საათები</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>ორშაბათი - პარასკევი:</strong> 09:00 - 17:00
              </p>
              <p>
                <strong>შაბათი - კვირა:</strong> დაკეტილია
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>დაგვიკავშირდით</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">თქვენი სახელი</Label>
                <Input id="name" placeholder="მაგ: გიორგი" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">თქვენი ელ.ფოსტა</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">თქვენი შეტყობინება</Label>
                <Textarea
                  id="message"
                  placeholder="დაწერეთ თქვენი შეტყობინება აქ..."
                />
              </div>
              <Button className="w-full">გაგზავნა</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-96 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.485145941608!2d41.6703565154378!3d42.14819817920158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4058d86161247a31%3A0x8c6f1f4b595a8988!2s9%20April%20St%2C%20Poti%2C%20Georgia!5e0!3m2!1sen!2sus!4v1624452245133!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
}
