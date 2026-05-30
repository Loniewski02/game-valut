export async function updateProfileAction(username: string, prevState: any, formData: FormData) {
  const res = await fetch(`/api/users/${username}/settings/profile`, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  return {
    ...data,
    status: res.status,
  };
}

export async function updateAccountAction(username: string, prevState: any, formData: FormData) {
  const res = await fetch(`/api/users/${username}/settings/account`, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  return {
    ...data,
    status: res.status,
  };
}
export async function deleteAccountAction(username: string, prevState: any, formData: FormData) {
  const res = await fetch(`/api/users/${username}/settings/delete`, {
    method: "DELETE",
    body: formData,
  });

  const data = await res.json();

  return {
    ...data,
    status: res.status,
  };
}
