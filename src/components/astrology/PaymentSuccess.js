import React,{useEffect, useState} from "react";
import "../.././assets/./scss/paymentpage.css";
import { useLocation, useHistory  } from "react-router-dom";
import { Component } from "ag-grid-community";
import { clear } from "redux-localstorage-simple";

const PaymentSuccess = () => {
  const [countDown, setCountDown] = useState(10);
  const location = useLocation();
  const history = useHistory();

  const getQueryParams = (query) => {
    return new URLSearchParams(query);
  };

  const queryParams = getQueryParams(location.search);
  const message = queryParams.get("message");
  const transactionId = queryParams.get("transactionId");
  const amount = queryParams.get("amount");

  // console.log("Message:", message);
  // console.log("Transaction ID:", transactionId);
  // console.log("Amount:", amount);

  // https://www.astrogyata.in/code=PAYMENT_SUCCESS&transactionId=T2407111735259614648730&message=Your+payment+is+successful.&amount=1.18&type=UPI
//   timer = () => {
//     const interval = setInterval(() => {
//       setCountDown((countDown) => countDown - 1);
//   })
// }

  useEffect(() => {
    const savedEndTime = localStorage.getItem('endTime');
    const endTime = savedEndTime ? new Date(parseInt(savedEndTime)) : new Date(Date.now() + 10000);
    localStorage.setItem('endTime', endTime.getTime());

      const updateCountdown = () => {
      const now = new Date();
      const remainingTime = Math.max(0, Math.floor((endTime - now) / 1000));
      setCountDown(remainingTime);
      if (remainingTime <= 0) {
        history.push("/");
        localStorage.removeItem("endTime")
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    // Redirect to the home page after 10 seconds
    const timer = setTimeout(() => {
      history.push("/");
    }, 10000);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [history]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="message-box _success">
            <i className="fa fa-check-circle" aria-hidden="true"></i>
            <h2>Thank You</h2>
            <h4>{message}</h4>
            <p>Transaction ID: {transactionId}</p>
            <p>Amount:{amount}₹</p>
            <p>
              Thank you for your payment.<br />
            </p>
            <p>{amount}₹ Successfully Added In Your Wallet</p>
            <h1>Redirect in Home {countDown}</h1>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default PaymentSuccess;
