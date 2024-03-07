export async function getProvinces() {
  const response = await fetch(
    "https://deployreciclame-production.up.railway.app/provinces",
  );
  const data = await response.json();
  return data;
}

export async function getLocalitiesFromProvince(provinceID) {
  const response = await fetch(
    `https://deployreciclame-production.up.railway.app/provinces/${provinceID}/locations`,
  );
  const data = await response.json();
  return data;
}

export async function getCategories() {
  const response = await fetch(
    "https://deployreciclame-production.up.railway.app/posts/categories/all",
  );
  const data = await response.json();
  return data;
}

export async function getAllPublications() {
  const response = await fetch(
    "https://deployreciclame-production.up.railway.app/posts/all",
  );
  const data = await response.json();

  return data;
}
export async function getPublicationsByTitle(query) {
  const response = await fetch(
    `https://deployreciclame-production.up.railway.app/posts/findByTitle/${query}`,
  );
  const data = await response.json();

  return data;
}

export async function getPublication(post_id) {
  const response = await fetch(
    `https://deployreciclame-production.up.railway.app/posts/${post_id}`,
    {
      next: {
        revalidate: 60,
      },
    },
  );
  const data = await response.json();

  return data;
}

export async function getAllUsers() {
  const res = await fetch(
    "https://deployreciclame-production.up.railway.app/users/all",
  );
  const data = await res.json();
  return data;
}

export async function getProfile(profile_id) {
  const API_URL = `https://deployreciclame-production.up.railway.app/profiles/${profile_id}`;

  try {
    const res = await fetch(API_URL, {
      next: {
        revalidate: 5,
      },
    });

    if (!res.ok) {
      throw new Error("Error al obtener datos del perfil.");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error al obtener datos del perfil:", error);
    return null;
  }
}

export async function getAllProfiles() {
  const res = await fetch(
    "https://deployreciclame-production.up.railway.app/profiles/all",
  );
  const data = await res.json();
  return data;
}

export async function getPublicationById(user_id) {
  const API_URL = `https://deployreciclame-production.up.railway.app/posts/${user_id}`;
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
}

export async function getFavorites(profile_id) {
  const API_URL = `https://deployreciclame-production.up.railway.app/profiles/${profile_id}/favoritePosts`;
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
}

export async function getDonations(profile_id) {
  const API_URL = `https://deployreciclame-production.up.railway.app/profiles/${profile_id}/posts-closed`;
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
}
