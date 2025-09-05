import Header from "../components/appbar";
import ResponsiveDrawer from "./_components/ResponsiveDrawer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Header always on top */}
      <Header />

      {/* Sidebar */}
      <ResponsiveDrawer>
        <div className="p-4">DrawerList</div>
      </ResponsiveDrawer>

      {/* Main content */}
      <main className="md:ml-64 p-6 mt-[64px]">{children}</main>
    </div>
  );
}
