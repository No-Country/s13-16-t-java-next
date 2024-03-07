import useSWR from "swr";


export function useGetNotifications () {
  const profileId =
  typeof window !== "undefined" && localStorage.getItem("profileId");

  const API_URL = `https://deployreciclame-production.up.railway.app/profiles/notifications/${profileId}`

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR(API_URL, fetcher, { refreshInterval: 3000 })
  let unread = [] 
  if (data && Array.isArray(data)) {
    unread = data.filter((notification) => !notification.isRead);
  }

  async function markAsRead(){
    try {
      const API_URL = `https://deployreciclame-production.up.railway.app/profiles/updateNotifications/${profileId}`
      const response = await fetch(API_URL, {
        method: "PUT"
      })
      if (response.ok) {
        console.log(response)
      }
    }catch(error){
      console.error('Error al marcar las notificaciones como leídas:', error.message);
      throw error;
    }
  }
  return {data, error, isLoading, unread, markAsRead};
}