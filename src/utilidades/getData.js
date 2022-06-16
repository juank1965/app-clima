export default function getData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}
