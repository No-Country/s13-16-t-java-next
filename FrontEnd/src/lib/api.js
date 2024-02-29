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

export async function getPublication(post_id) {
  const response = await fetch(
    `https://deployreciclame-production.up.railway.app/posts/${post_id}`,
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

