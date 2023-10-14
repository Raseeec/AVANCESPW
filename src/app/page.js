import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div>
        <h1>Página de inicio</h1>
        <Link href="/PerfilUsuario">Editar Perfil</Link>
      </div>
    </main>
  );
}
