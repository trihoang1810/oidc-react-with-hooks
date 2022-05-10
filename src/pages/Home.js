import React from "react";
import { useAuth } from "oidc-react";
function Home() {
  const { userData, signOut } = useAuth();
  const logout = async () => {
    await signOut();
  };
  return (
    <div>
      <pre>
        <code>{JSON.stringify(userData, null, 2)}</code>
      </pre>
      <button onClick={async () => await logout()}>Logout</button>
    </div>
  );
}

export default Home;
