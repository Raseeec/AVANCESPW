import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div>
        <h1>Página de inicio</h1>
        <Link href="/PerfilUsuario">Editar Perfil Usuario</Link>
        <br />
        <Link href="/PerfilAdmin">Editar Perfil Admin</Link>
      </div>
    </main>
  );
}
