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

export function ProfileMobileSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex w-full items-center gap-2 overflow-hidden p-2`}
    >
      <div className="h-10 min-w-10 rounded-full bg-gray-bg" />
      <div className="w-full flex-col p-2">
        <div className="h-6 w-full bg-gray-bg" />
        <a
          href={"/perfil"}
          className={`text-sm text-primary-green underline hover:cursor-pointer`}
        >
          Mi Perfil <span>→</span>
        </a>
      </div>
    </div>
  );
}

export function ProfileImageSkeleton() {
  return (
    <div
      className={`${shimmer} hidden h-10 min-w-10 rounded-full bg-gray-dark-bg md:block`}
    ></div>
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
    </div>
  );
}

export function CardsPostsSkeleton() {
  return (
    <div className="my-10 flex flex-wrap justify-center gap-4 md:mx-auto  md:columns-6">
      <CardPostSkeleton />
      <CardPostSkeleton />
      <CardPostSkeleton />
      <CardPostSkeleton />
      <CardPostSkeleton />
      <CardPostSkeleton />
      <CardPostSkeleton />
      <CardPostSkeleton />
    </div>
  );
}
export function CardPostSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex flex-col gap-y-4 overflow-hidden`}
    >
      <div className="flex h-[200px] w-[250px] items-center justify-center rounded-md bg-gray-dark-bg object-cover"></div>
      <div className="h-6 w-28 rounded-md bg-gray-dark-bg"></div>
    </div>
  );
}
export function BlogsPostsSkeleton() {
  return (
    <div className="my-12 flex w-full flex-wrap justify-center gap-x-4 gap-y-10 md:mx-auto min-[1337px]:justify-between">
      <BlogPostSkeleton />
      <BlogPostSkeleton />
      <BlogPostSkeleton />
      <BlogPostSkeleton />
      <BlogPostSkeleton />
      <BlogPostSkeleton />
      <BlogPostSkeleton />
      <BlogPostSkeleton />
    </div>
  );
}
export function BlogPostSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex flex-col gap-y-4 overflow-hidden`}
    >
      <div className="flex h-[250px] w-[370px] items-center justify-center rounded-md bg-gray-dark-bg object-cover"></div>
      <div className="h-6 w-28 rounded-md bg-gray-dark-bg"></div>
    </div>
  );
}
export function PostPageSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex flex-wrap justify-center overflow-hidden`}
    >
      <div className="flex w-full max-w-96 flex-col gap-8 p-5 max-lg:mx-auto lg:max-w-[35rem] lg:p-20 xl:p-24">
        <div className="mx-auto h-full max-h-72 min-h-40 w-full items-center justify-center rounded-2xl bg-gray-dark-bg lg:flex "></div>
        <div className=" mt-0 flex w-full items-center justify-between gap-3">
          <div className="flex w-full items-center gap-3">
            <div className="h-16 w-16 rounded-full bg-gray-dark-bg"></div>
            <div className="h-8 w-36 rounded-lg bg-gray-dark-bg"></div>
          </div>
          <div className="flex h-8 w-8 items-center gap-2 rounded-lg bg-gray-dark-bg"></div>
        </div>
      </div>
      <div className="flex w-full max-w-96 flex-col gap-4 p-5 max-lg:mx-auto lg:max-w-[35rem] lg:gap-8 lg:p-20 xl:p-24">
        <div className="h-12 w-full rounded-lg bg-gray-dark-bg text-xl font-semibold lg:text-4xl"></div>
        <div className="flex h-8 w-28 items-center justify-center rounded-3xl bg-gray-dark-bg p-1 px-4 text-white"></div>
        <div className="h-36 w-full rounded-lg bg-gray-dark-bg text-justify"></div>
        <div
          className={`mt-0 flex h-12 w-full justify-center gap-2 rounded-3xl bg-gray-dark-bg p-2 text-lg font-[500]`}
        ></div>
      </div>
    </div>
  );
}
