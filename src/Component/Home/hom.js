document.getElementsByClassName("span").addEventListener("click", function () {
    console.log('okk' );
  const inputValue = document.getElementsByClassName("inputTitle");
  const input = inputValue.value;
    const text = document.getElementsByClassName("homeTitle");
    text.innerText = input;
});
