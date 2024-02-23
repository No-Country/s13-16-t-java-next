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

export function ProfileCardSkeleton() {
    return(
/*     <div className="w-11/12 relative max-[855px]:w-full mx-auto border-solid border-2 bg-gray-dark-bg rounded-[2.5rem] max-[855px]:rounded-none h-fit shadow-xl max-[855px]:shadow-none -translate-y-16">
 */    
 <div className={`${shimmer} relative overflow-hidden w-11/12 max-[855px]:w-full mx-auto border-solid border-2 bg-gray-dark-bg rounded-[2.5rem] max-[855px]:rounded-none h-fit shadow-xl max-[855px]:shadow-none -translate-y-16`}>
        <div className="mb-8 flex flex-col min-[855px]:flex-row justify-between">
            <div className="bg-gray-bg rounded-full z-50 h-[200px] w-[200px] ml-10 -translate-y-16 border-white border-4 border-solid"></div>
            <div className="mt-8 max-[855px]:-mt-8">
                <div className="bg-gray-bg w-56 h-8 max-[855px]:ml-10 rounded-md"></div>
                <div className="max-[855px]:mt-12 flex max-sm:flex-wrap gap-x-10 mt-6 max-[855px]:w-11/12 max-[855px]:mx-auto">
                    <div className="bg-gray-bg w-24 h-6 rounded-md"></div>
                    <div className="bg-gray-bg w-24 h-6 rounded-md"></div>
                    <div className="bg-gray-bg w-24 h-6 rounded-md"></div>
                </div>
            </div>
            <div className="mt-8 lg:pr-20 max-[855px]:mt-12 max-[855px]:w-11/12 max-[855px]:mx-auto">
                <div className="bg-gray-bg w-28 h-6 mb-4 rounded-md"></div>
                <div className="flex gap-4 w-52 max-[855px]:w-full flex-wrap">
                    <div className="bg-gray-bg w-20 h-6 rounded-md"></div>
                    <div className="bg-gray-bg w-20 h-6 rounded-md"></div>
                    <div className="bg-gray-bg w-20 h-6 rounded-md"></div>
                </div>
            </div>
        </div>
        <div className="w-11/12 mb-4 max-[855px]:w-full mx-auto flex max-[855px]:justify-center min-[855px]:gap-x-6">
            <div className="bg-gray-bg w-28 h-8 rounded-md"></div>
            <div className="bg-gray-bg w-28 h-8 rounded-md"></div>
            <div className="bg-gray-bg w-28 h-8 rounded-md"></div>
        </div>
        <div className="absolute top-4 right-8 w-6 h-6 bg-gray-bg rounded-md p-1"></div>
     </div>
    )
}