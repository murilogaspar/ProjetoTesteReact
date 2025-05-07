// app/usuarioficha.tsx
import { mockUsers } from "./mockficha";

export default function Usuarioficha() {
  return (
    <div className="p-6 grid grid-cols-1 gap-6">
      {mockUsers.map((user) => (
        <div
          key={user.id}
          className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            {user.nameSocial}
          </h2>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div><strong>ID:</strong> {user.id}</div>
            <div><strong>Nascimento:</strong> {user.dataDeNascimento}</div>
            <div><strong>Gênero:</strong> {user.genero}</div>
            <div><strong>Fiiação:</strong> {user.genero}</div>            
          </div>
        </div>
      ))}
    </div>
  );
}
