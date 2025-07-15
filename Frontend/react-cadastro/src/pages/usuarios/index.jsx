import api from "../../services/api";
import { useEffect, useState } from "react";

function ListarUsuarios() {
  const [users, setUsers] = useState();
  useEffect(() => {
    async function loadUsers() {
      const token = localStorage.getItem("token");
      const {
        data: { users },
      } = await api.get("/listar-usuarios", {
        headers: { Authorization: `Bearer ${token}` },
        //headers.authorization
      });

      setUsers(users);
    }

    loadUsers();

    return () => {};
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-md shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Listar Usuários</h2>
      <ul className="space-y-2">
        {users &&
          users.length > 0 &&
          users.map((user) => (
            <li key={user.id} className="bg-gray-100 p-4 rounded-md">
              <p className="font-semibold">ID: {user.id}</p>
              <p className="font-semibold">Nome: {user.name}</p>
              <p className="font-semibold">Email: {user.email}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ListarUsuarios;
