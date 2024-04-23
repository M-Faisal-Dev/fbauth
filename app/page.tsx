"use client"
import { FaFacebook } from "react-icons/fa";
import { signIn ,signOut, useSession } from 'next-auth/react';


export default function Home() {
  const handleFacebookLogin = async () => {
    await signIn('facebook');
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <p>Connect with Facebook</p>
      <button onClick={handleFacebookLogin}>
        <FaFacebook className="text-4xl text-blue-700" />
      </button>
    </div>
  );
}
