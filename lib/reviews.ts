export async function FormAddReviewAction(prevState: any, formData: FormData) {
  const res = await fetch("/api/games/reviews/add", {
    method: "POST",
    body: formData,
  });
  const data = await res.json();

  return {
    ...data,
    status: res.status,
  };
}
