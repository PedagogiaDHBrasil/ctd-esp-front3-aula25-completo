import Link from "next/link";

const About = () => {
  return (
    <div>
      <Link href="/">
        <a>Página inicial</a>
      </Link>
      <p>Está rota é estática</p>
    </div>
  );
};

export default About;
