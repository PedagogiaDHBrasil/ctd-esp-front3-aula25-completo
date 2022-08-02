import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Link href="/[dynamic]/[id]" as="/serie/rickandmorty">
        <a>Acessar rota dinâmica</a>
      </Link>
      <br />
      <Link href="/static">
        <a>Acessar rota estática</a>
      </Link>
    </div>
  );
};

export default Home;
