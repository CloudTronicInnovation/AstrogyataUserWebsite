import axiosConfig from "./axiosConfig";

function bookEvent(payload) {
  axiosConfig
    .get()
    .then(resp => {
      console.log(resp);
    })
    .catch(errr => {
      console.log(errr);
    });
}
