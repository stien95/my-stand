import Link from "next/link";

export default function LinkHeader({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="backdrop-blur-md hover:bg-gray-600/15 rounded-md transition-all p-2"
    >
      {children}
    </Link>
  );
}
