import Stripe from "stripe";
import dotenv from "dotenv";

const stripe = new Stripe(
  "sk_test_51P1BB6CtUul5Soc8Vu8AficssxLsuCMu3qLOjUfnyLwMYADQGlfip7HsmrWjbmQ6RX2fuKHiObdaIeFs3mgUB70400x2t9XiUS"
);

const createSession = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            product_data: {
              name: "Laptop",
              description: "A gaming laptop",
            },
            currency: "usd",
            unit_amount: 20000, // 200.00 USD
          },
          quantity: 1,
        },
        {
          price_data: {
            product_data: {
              name: "TV",
              description: "A TV",
            },
            currency: "usd",
            unit_amount: 10000, // 100.00 USD
          },
          quantity: 2,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/Confirmacion",
      cancel_url: "http://localhost:3000/cancel",
    });
    res.status(200).json(session);
  } catch (err) {
    res.status(500).json(err);
  }
};
export default createSession;
