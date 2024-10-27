// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Noite das Massinhas',
  description: 'Aplicativo divertido para uma noite de massinhas para crianças!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-yellow-100 font-sans">
        <header className="bg-yellow-300 text-center py-4">
          <h1 className="text-4xl font-bold text-blue-500">Noite das Massinhas</h1>
        </header>
        <main className="max-w-4xl mx-auto mt-8">
          {children}
        </main>
      </body>
    </html>
  );
}
