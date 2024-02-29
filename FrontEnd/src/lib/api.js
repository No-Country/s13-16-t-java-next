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

export async function PostNewUser(formData) {
  const response = await fetch(
    "https://deployreciclame-production.up.railway.app/users/save",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
    },
  );

  if (response.ok) {
    alert("Usuario registrado con éxito.");
  } else {
    alert("Error al registrar usuario.");
  }
}

