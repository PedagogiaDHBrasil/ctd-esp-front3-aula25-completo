import { useRouter } from "next/router";
import Link from "next/link";

const DynamicPage = () => {
  const router = useRouter();
  const {
    query: { dynamic, id },
  } = router;
  return (
    <div>
      <Link href="/">
        <a>Página inicial</a>
      </Link>
      <p>
        Rota dinâmica: /{dynamic}/{id}
      </p>
    </div>
  );
};

export default DynamicPage;
