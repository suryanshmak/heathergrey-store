import Link from "next/link";

export const Hotels = () => {
  return (
    <div className="p-20 grid gap-6 grid-cols-3 place-items-center">
      <Link href="/hotels-and-resorts/gt/login">
        <img src="/gt.png" alt="gateway resorts" className="h-48" />
      </Link>
    </div>
  );
};
