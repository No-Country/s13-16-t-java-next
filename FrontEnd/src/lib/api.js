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
