const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function NotificationsCartsSkeleton() {
  return (
    <>
      <NotificationCartSkeleton />
      <NotificationCartSkeleton />
      <NotificationCartSkeleton />
      <NotificationCartSkeleton />
    </>
  );
}
export function NotificationCartSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex w-full items-center overflow-hidden rounded-2xl bg-gray-dark-bg p-2`}
    >
      <div className="m-2 h-[90px] w-[90px] rounded-full bg-gray-bg md:h-[150px] md:w-[150px]"></div>
      <div className="flex flex-col md:ml-6 md:text-xl">
        <div className="mb-2 h-5 w-32 bg-gray-bg pr-12"></div>
        <div className="h-5 w-56 bg-gray-bg"></div>
      </div>
      <div className="absolute right-3 top-4 h-5 w-10 bg-gray-bg md:right-6"></div>
    </div>
  );
}
