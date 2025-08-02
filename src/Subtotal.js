import React from 'react';
import "./Subtotal.css";
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';

function Subtotal() {
  return (
    <div className="subtotal">
      <NumericFormat
        value={0}
        displayType="text"
        decimalScale={2}
        thousandSeparator
        prefix="$"
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
      />
      <Link to="/payment">
        <button className='add_a'>Proceed to checkout</button>
      </Link>
    </div>
  );
}

export default Subtotal;

