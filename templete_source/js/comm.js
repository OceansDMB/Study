/* HTTP GET/POST 방식 axios 기반 통신
  axios 는 Promise API 를 지원함
*/

function getNewsGet() {
  axios("http://localhost:8082/news", {
    method: "get",
    params: {
      email: "test@test.com",
    },
  })
    .then((response) => {
      console.log(response.data["status"], response.data["info"]);
      const newMsg = document.querySelector(".news");
      newMsg.innerText = response.data("info");
    })
    .catch((error) => {
      console.log(error);
    });
}

getNewsGet();
