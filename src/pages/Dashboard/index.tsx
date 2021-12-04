import { useAuth } from '../../hooks/useAuth';

export function Dashboard() {
  const { logout } = useAuth();

  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={logout}>Sair</button>
    </>
  );
}
