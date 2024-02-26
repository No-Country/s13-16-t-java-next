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
export function ProfileCardSkeleton() {
  return (
    <div
      className={`mx-auto h-fit w-11/12 -translate-y-16 rounded-[2.5rem] border-2 border-solid bg-gray-dark-bg shadow-xl max-[855px]:w-full max-[855px]:rounded-none max-[855px]:shadow-none`}
    >
      <div className="mb-8 flex flex-col justify-between min-[855px]:flex-row">
        <div
          className={`${shimmer} relative z-50 ml-10 h-[200px] w-[200px] -translate-y-16 overflow-hidden rounded-full border-4 border-solid border-white bg-gray-bg`}
        ></div>
        <div className="mt-8 max-[855px]:-mt-8">
          <div className="h-8 w-56 rounded-md bg-gray-bg max-[855px]:ml-10"></div>
          <div className="mt-6 flex gap-x-10 gap-y-2 max-[855px]:mx-auto max-[855px]:mt-12 max-[855px]:w-11/12 max-sm:flex-wrap">
            <div className="h-6 w-24 rounded-md bg-gray-bg"></div>
            <div className="h-6 w-24 rounded-md bg-gray-bg"></div>
            <div className="h-6 w-24 rounded-md bg-gray-bg"></div>
          </div>
        </div>
        <div className="mt-8 max-[855px]:mx-auto max-[855px]:mt-12 max-[855px]:w-11/12 lg:pr-20">
          <div className="mb-4 h-6 w-28 rounded-md bg-gray-bg"></div>
          <div className="flex w-52 flex-wrap gap-4 max-[855px]:w-full">
            <div className="h-6 w-20 rounded-md bg-gray-bg"></div>
            <div className="h-6 w-20 rounded-md bg-gray-bg"></div>
            <div className="h-6 w-20 rounded-md bg-gray-bg"></div>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-4 flex w-11/12 max-[855px]:w-full max-[855px]:justify-center min-[855px]:gap-x-6">
        <div className="h-8 w-28 rounded-md bg-gray-bg"></div>
        <div className="h-8 w-28 rounded-md bg-gray-bg"></div>
        <div className="h-8 w-28 rounded-md bg-gray-bg"></div>
      </div>
      <div className="absolute right-8 top-4 h-6 w-6 rounded-md bg-gray-bg p-1"></div>
    </div>
  );
}
