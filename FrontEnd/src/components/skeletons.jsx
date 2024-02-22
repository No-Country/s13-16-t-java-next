const shimmer = 'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

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
        <div className={`${shimmer} relative w-full overflow-hidden bg-gray-dark-bg p-2 rounded-2xl flex items-center`}>
            <div className="bg-gray-bg rounded-full m-2 w-[90px] md:w-[150px] h-[90px] md:h-[150px]"></div>
            <div className="flex flex-col md:ml-6 md:text-xl">
                <div className="bg-gray-bg mb-2 pr-12 w-32 h-5"></div>
                <div className="bg-gray-bg w-56 h-5"></div>
            </div>
            <div className="bg-gray-bg absolute top-4 right-3 md:right-6 w-10 h-5"></div>
        </div>
    );
}

