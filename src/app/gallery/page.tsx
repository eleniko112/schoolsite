import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export default function GalleryPage() {
  return (
    <div className="space-y-8">
      <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
        გალერეა
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {PlaceHolderImages.map((image) => (
          <Card
            key={image.id}
            className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <CardContent className="p-0">
              <div className="aspect-w-3 aspect-h-2 relative w-full">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                  data-ai-hint={image.imageHint}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
