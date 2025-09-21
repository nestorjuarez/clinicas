import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/login');
  
  // No se renderizará nada aquí, ya que la redirección ocurre en el servidor.
  return null;
}
