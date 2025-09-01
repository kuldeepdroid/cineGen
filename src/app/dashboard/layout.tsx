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
        <div>
          <Header />
        </div>
        <div className="ml-64 p-6">{children}</div>
      </div>
    </div>
  );
}
