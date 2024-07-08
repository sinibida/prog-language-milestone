const userDeleteButtons = document.querySelectorAll(
  ".user-table__delete-button"
);
userDeleteButtons.forEach((button) => {
  const { userId } = button.dataset;
  button.addEventListener("click", async () => {
    if (!confirm("정말 이 유저를 삭제하시겠습니까?")) return;

    const xx = await fetch(`/users/${userId}`, {
      method: "delete",
    })
    window.location.reload();
  });
});

const commentDeleteButtons = document.querySelectorAll(
  ".comment-table__delete-button"
);
commentDeleteButtons.forEach((button) => {
  const { commentId } = button.dataset;
  button.addEventListener("click", async () => {
    if (!confirm("정말 이 커멘트를 삭제하시겠습니까?")) return;

    const xx = await fetch(`/comments/${commentId}`, {
      method: "delete",
    })
    window.location.reload();
  });
});
