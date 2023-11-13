//lrc para crear layout (comando atajo)
export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="bg-red-500 min-h-screen">{children}</div>;
}
