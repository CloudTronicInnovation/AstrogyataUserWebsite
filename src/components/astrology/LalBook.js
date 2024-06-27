import React from "react";

function callApis() {
  const api1 = fetch("http://13.234.48.35:8000/user/lalkitab_horoscope");
  const api2 = fetch("http://13.234.48.35:8000//user/lalkitab_horoscope");
  const api3 = fetch("http://13.234.48.35:8000//user/lalkitab_planets");

  Promise.all([api1, api2, api3])
    .then(responses => {
      // handle the responses here
      const [response1, response2, response3] = responses;
      return Promise.all([
        response1.json(),
        response2.json(),
        response3.json(),
      ]);
    })
    .then(jsonResponses => {
      // handle the JSON responses here
      const [json1, json2, json3] = jsonResponses;
      console.log(json1);
      console.log(json2);
      console.log(json3);
    })
    .catch(error => {
      // handle the error here
      console.error(error);
    });
}

callApis();
