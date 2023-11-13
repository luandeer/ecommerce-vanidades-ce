//lrc para crear layout (comando atajo)
export default function AutLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-500 min-h-screen">
      {children}
    </div>
  );
}
