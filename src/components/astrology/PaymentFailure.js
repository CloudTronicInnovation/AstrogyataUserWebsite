import React, { useEffect, useState } from "react";
import "../.././assets/./scss/paymentpage.css";
import { useLocation, useHistory } from "react-router-dom";

const PaymentFailed = () => {
  const location = useLocation();
  const history = useHistory();
  const [countDown, setCountDown] = useState(10);

  const getQueryParams = (query) => {
    return new URLSearchParams(query);
  };

  const queryParams = getQueryParams(location.search);
  const message = queryParams.get("message");
  const code = queryParams.get("code");
  const amount = queryParams.get("amount");
  // https://www.astrogyata.in/Paymentfailure/code=PAYMENT_PENDING&amount=1.18&message=Your+request+is+in+pending+state.\

  // timer = () => {

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

    // return () => clearInterval(intervel);
    // Redirect to the home page after 10 seconds
    const timer = setTimeout(() => {
      history.push("/");
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [history]);

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="message-box _success _failed">
          <i className="fa fa-times-circle" aria-hidden="true"></i>
          <h2>Your payment failed</h2>
          <h3>{message}</h3>
          <p>{code}</p>
          <p>Amount: {amount}</p>
          <p>Try again later</p>
          <h1>Redirect in Home {countDown}</h1>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
