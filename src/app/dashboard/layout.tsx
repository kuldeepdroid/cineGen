import Header from "../components/appbar";
import SideNav from "./_components/SideNav";

export default function DashbooardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="md:block  w-64 h-screen hidden fixed mt-[54px]">
        <SideNav />
      </div>
      <div>
        <Header />
        {children}
      </div>
    </div>
  );
}
