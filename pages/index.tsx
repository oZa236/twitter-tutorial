import Header from "@/components/Header"
import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter();
  
  return (
    <>
      <Header label="Home" />
    </>
  )
}
