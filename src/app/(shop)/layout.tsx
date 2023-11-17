import { TopMenu, Sidebar, Footer } from "@/components";

//lrc para crear layout (comando atajo)
export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <main className="min-h-screen">
    <TopMenu/>
    <Sidebar/>
    <div className="px-0 sm:px-10">
    {children}
    </div>
    <Footer/>
  </main>
  );
}
