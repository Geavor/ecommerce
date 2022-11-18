import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PAYPAL_ID } from "../../constants/env";
import { CartContext } from "../../context/CartContext";

const PaypalPayment = ({ value, order }) => {
  const nav = useNavigate();
  const { dispatch } = useContext(CartContext);

  const removeAllCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  return (
    <PayPalScriptProvider options={{ "client-id": PAYPAL_ID }}>
      <PayPalButtons
        createOrder={(_, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value,
                },
                custom_id: order.id,
              },
            ],
          });
        }}
        onApprove={(_, actions) => {
          return actions.order.capture().then((resp) => {
            if (resp.status === "COMPLETED") {
              removeAllCart();
              nav("/pago-exitoso");
            } else {
              alert("Tu pago no se procesó. Intenta nuevamente");
            }
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalPayment;
