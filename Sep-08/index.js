function Dipslay_fetch() {
  const fetching = fetch("https://api.github.com/users/shaikhmd007");
  console.log(fetching);

  fetching.then((user_data) => {
    console.log(user_data);
    const data = user_data.text();
    console.log(user_data);
    data.then((text) => {
      document.write(text);
      console.log(text);
    });
  });
}
