import useSWR from "swr";

const API_URL = 'http://localhost:3002/notifications'

export function useGetNotifications () {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR(API_URL, fetcher, { refreshInterval: 2000 })
    const unread = data?.filter((notification) => !notification.read);

    async function markAsRead(){
        try {
          const updatePromises = unread?.map(async (notification) => {
            const specificApiUrl = `${API_URL}/${notification.id}`;
            const response = await fetch(specificApiUrl, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
                // token de autenticación
              },
              body: JSON.stringify({
                read: true,
              }),
            });
            if (!response.ok) {
              throw new Error(`Error al marcar la notificación de ${notification.name} como leída`);
            }
            return await response.json();
          });

          const updatedNotifications = await Promise.all(updatePromises);
          return updatedNotifications;
        } catch (error) {
          console.error('Error al marcar las notificaciones como leídas:', error.message);
          throw error;
        }
    };
    return {data, error, isLoading, unread, markAsRead};
};