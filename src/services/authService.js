export async function login(authDetail) {
  const res = await fetch(`${process.env.REACT_APP_HOST}/login`, {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  });

  if (!res.ok) {
    throw Object.assign(new Error(res.statusText), { status: res.status });
  }
  const data = await res.json();

  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("bhid", JSON.stringify(data.user.id));
  }
  return data;
}

export async function register(authDetail) {
  const res = await fetch(`${process.env.REACT_APP_HOST}/register`, {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  });

  if (!res.ok) {
    throw Object.assign(new Error(res.statusText), { status: res.status });
  }
  const data = await res.json();
  return data;
}

export function logout() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("cbid");
}
