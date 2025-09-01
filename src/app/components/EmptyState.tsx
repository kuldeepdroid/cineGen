import { Button } from "@mui/material";
import Link from "next/link";

export const EmptyState = ({}) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center mt-10 border-dashed border-2 gap-2 p-5 py-24 border-gray-400">
      <p className="text-2xl font-bold text-gray-500">
        You dont have any short video created
      </p>
      <Link href="/dashboard/create">
        <Button className="!bg-primary !text-white">
          Create New Short Video
        </Button>
      </Link>
    </div>
  );
};
