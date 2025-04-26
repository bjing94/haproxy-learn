import { request } from "undici";

(async () => {
  for (let i = 0; i < 600; i++) {
    request("http://localhost:8080", {
      method: "GET",
    }).then((res) => {
      console.log(res.statusCode, i);
    });
  }
})();
