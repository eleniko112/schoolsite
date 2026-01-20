import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import {
  Sidebar,
  SidebarProvider,
  SidebarInset,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { MainNav } from '@/components/main-nav';
import { UserNav } from '@/components/user-nav';
import { Logo } from '@/components/logo';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'ფოთის სკოლის ჰაბი',
  description: 'თქვენი ცენტრალური ჰაბი ფოთის სკოლის შესახებ ინფორმაციისთვის.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka" suppressHydrationWarning>
      <head></head>
      <body className={cn('font-body antialiased')}>
        <ThemeProvider>
          <SidebarProvider>
            <Sidebar>
              <SidebarHeader className="p-4">
                <Logo />
              </SidebarHeader>
              <SidebarContent>
                <MainNav />
              </SidebarContent>
              <SidebarFooter className="p-4">
                <UserNav />
              </SidebarFooter>
            </Sidebar>
            <SidebarInset>
              <header className="flex h-14 items-center gap-4 border-b bg-background/95 px-6 backdrop-blur-sm">
                <SidebarTrigger className="md:hidden" />
                <h1 className="font-headline text-lg font-semibold md:text-xl">
                  ფოთის სკოლის ჰაბი
                </h1>
              </header>
              <main className="flex-1 p-4 md:p-6 lg:p-8">{children}</main>
            </SidebarInset>
          </SidebarProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
