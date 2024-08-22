export async function getUser() {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const bhid = JSON.parse(sessionStorage.getItem("bhid"));

  const res = await fetch(`${process.env.REACT_APP_HOST}/600/users/${bhid}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(res);
  if (!res.ok) {
    throw Object.assign(new Error(res.statusText), { status: res.status });
  }
  const data = await res.json();
  console.log(data);
  return data;
}

export async function getUserOrders() {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const bhid = JSON.parse(sessionStorage.getItem("bhid"));
  const res = await fetch(
    `${process.env.REACT_APP_HOST}/660/orders?user.id=${bhid}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!res.ok) {
    throw Object.assign(new Error(res.statusText), { status: res.status });
  }
  const data = await res.json();
  return data;
}

export async function createOrder(cartList, total, userDetails) {
  const token = JSON.parse(sessionStorage.getItem("token"));

  //   const bhid = JSON.parse(sessionStorage.getItem("bhid"));
  const order = {
    cartList: cartList,
    amount_total: total,
    quantity: cartList.length,
    user: {
      name: userDetails.name,
      email: userDetails.email,
      id: userDetails.id,
    },
  };
  const res = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(order),
  });
  if (!res.ok) {
    throw Object.assign(new Error(res.statusText), { status: res.status });
  }
  const data = await res.json();
  return data;
}
