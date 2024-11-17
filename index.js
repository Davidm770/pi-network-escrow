import { useState, useEffect } from "react";
import { Pi } from "@pihub/sdk";

export default function Home() {
  const [user, setUser] = useState(null);
  const [escrow, setEscrow] = useState(null);

  // Initialize Pi SDK
  useEffect(() => {
    Pi.authenticate(
      {
        onReadyForServerApproval: (data) => console.log("Server approval needed", data),
        onReadyForServerCompletion: (data) => console.log("Server completion needed", data),
        onCancel: (reason) => console.error("Login canceled:", reason),
        onError: (error) => console.error("Login error:", error),
      },
      process.env.NEXT_PUBLIC_PI_APP_ID
    ).then(setUser);
  }, []);

  const createEscrow = async () => {
    if (!user) {
      alert("Please log in first.");
      return;
    }

    const response = await fetch("/api/escrow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        buyer: user.username,
        seller: "seller_pi_username", // Replace with actual seller username
        amount: 10, // Pi amount
      }),
    });
    const data = await response.json();
    setEscrow(data);
  };

  return (
    <div>
      <h1>Escrow App with Pi Network</h1>
      {user ? (
        <p>Welcome, {user.username}!</p>
      ) : (
        <p>Please log in using the Pi Network.</p>
      )}
      <button onClick={createEscrow}>Create Escrow</button>
      {escrow && (
        <div>
          <h2>Escrow Details</h2>
          <p>Buyer: {escrow.buyer}</p>
          <p>Seller: {escrow.seller}</p>
          <p>Amount: {escrow.amount} Pi</p>
          <p>Status: {escrow.status}</p>
        </div>
      )}
    </div>
  );
}