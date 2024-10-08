import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("token");
    router.push("/");
  }, []); // The empty array ensures the effect runs only once when the component mounts

  return null; // The component doesn't render anything
}
