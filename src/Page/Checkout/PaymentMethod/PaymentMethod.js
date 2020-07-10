import React from "react";

const PaymentMethod = () => {
  return (
    <div>
      <h1>Payment Method</h1>
      <form action="">
        <label htmlFor="">Card Number</label>
        <input type="text" input="1234 1234 1234 1234" />
       <div>
            <label htmlFor="">Expiration date</label>
            <select name="" id="">
              <option value="">Month</option>
            </select>
            <select name="" id=""><option value="">Year</option></select>
       </div>
       <label htmlFor="">Security Code</label>
       <input type="text" placeholder="Three digits"/>
      </form>
    </div>
  );
};

export default PaymentMethod;
