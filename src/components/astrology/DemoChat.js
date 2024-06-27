import React, { useCallback, useEffect } from "react";
import useRazorpay from "react-razorpay";
import { Button } from "reactstrap";

function DemoChat(props) {
  console.log(props);
  const Razorpay = useRazorpay();
  useEffect(() => {
    localStorage.getItem("");
  }, []);
  const handlePayment = useCallback(() => {
    const options = {
      key: "rzp_test_8Q9MGMi8hVqdfZ",
      amount: "100",
      currency: "INR",
      name: "Astromall Purchase",
      description: "Test Transaction",
      image: "http://example.com/your_logo",
      order_id: "",
      // order_id: order.id,
      handler: res => {
        console.log(res);
      },
      prefill: {
        name: "",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  return (
    <div className="App">
      {/* <button onClick={handlePayment}>Click</button> */}
      <Button onClick={handlePayment}>Payment</Button>
    </div>
  );
}
export default DemoChat;
