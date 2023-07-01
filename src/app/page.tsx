import Container from "@/app/components/Container";
import ClientOnly from "./components/ClientOnly";

const Home = async () => {
  return (
    <ClientOnly>
      <Container>
      </Container>
    </ClientOnly>
  )
}

export default Home;