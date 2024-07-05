const userDeleteButtons = document.querySelectorAll(
  ".user-table__delete-button"
);
userDeleteButtons.forEach((button) => {
  const { userId } = button.dataset;
  button.addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    xhr.onerror = () => {
      console.error(xhr.responseText);
    };
    xhr.open("delete", `/users/${userId}`);
    xhr.send();
    window.location.reload();
  });
});
