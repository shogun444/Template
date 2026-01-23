import { cn } from "@/app/utils/tailwind-clsx";

export default function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div
        className={cn(
          "bg-neutral-200 dark:bg-neutral-800 h-50 w-50 rounded-md",
          className,
        )}
      >
        {children}
      </div>
    </>
  );
}

export function CardTitle({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="tabler-icon tabler-icon-plus "
      >
        <path d="M12 5l0 14"></path>
        <path d="M5 12l14 0"></path>
      </svg>
    </div>
  );
}
