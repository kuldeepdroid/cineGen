import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  return (
    <div className="text-3xl font-bold underline w-screen h-full flex flex-col justify-center items-center">
      <p>HomePage</p>
      {JSON.stringify(session)}
    </div>
  );
}
