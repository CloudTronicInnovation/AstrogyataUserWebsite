// import React, { useCallback, useEffect } from "react";
// import useRazorpay from "react-razorpay";
// import { Button } from "reactstrap";

// function DemoChat(props) {
//   console.log(props);
//   const Razorpay = useRazorpay();
//   useEffect(() => {
//     localStorage.getItem("");
//   }, []);
//   const handlePayment = useCallback(() => {
//     const options = {
//       key: "rzp_test_8Q9MGMi8hVqdfZ",
//       amount: "100",
//       currency: "INR",
//       name: "Astromall Purchase",
//       description: "Test Transaction",
//       image: "http://example.com/your_logo",
//       order_id: "",
//       // order_id: order.id,
//       handler: res => {
//         console.log(res);
//       },
//       prefill: {
//         name: "",
//         email: "youremail@example.com",
//         contact: "9999999999",
//       },
//       notes: {
//         address: "Razorpay Corporate Office",
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };

//     const rzpay = new Razorpay(options);
//     rzpay.open();
//   }, [Razorpay]);

//   return (
//     <div className="App">
//       {/* <button onClick={handlePayment}>Click</button> */}
//       <Button onClick={handlePayment}>Payment</Button>
//     </div>
//   );
// }
// export default DemoChat;
import React, { useState } from "react";
import axios from "axios";

function InstaMojo() {
  const [paymentLink, setPaymentLink] = useState("");

  const createPayment = async () => {
    try {
      const response = await axios.post("/createPaymentLink");
      setPaymentLink(response.data.payment_request.longurl);
    } catch (error) {
      console.error("Error creating payment link:", error);
    }
  };

  return (
    <div className="App">
      <h1>Instamojo Payment Gateway Integration</h1>
      <button onClick={createPayment}>Pay Now</button>
      {paymentLink && (
        <div>
          <p>Click the following link to make the payment:</p>
          <a href={paymentLink} target="_blank" rel="noopener noreferrer">
            {paymentLink}
          </a>
        </div>
      )}
    </div>
  );
}

export default InstaMojo;
