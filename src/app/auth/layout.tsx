//lrc para crear layout (comando atajo)
export default function AutLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-gray-500 min-h-screen">
      {children}
    </main>
  );
}
