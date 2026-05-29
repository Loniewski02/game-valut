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
