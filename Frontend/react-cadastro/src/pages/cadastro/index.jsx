import { Link } from "react-router-dom";

function Cadastro() {
  return (
    <div className="mx-auto mt-10 p-8 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
        Cadastro
      </h2>
      <form>
        <input placeholder="Nome" type="text" />
        <input placeholder="Email" type="email" />
        <input placeholder="Senha" type="password" />
        <button>Cadastrar-se</button>
      </form>
      <Link to={"/login"}>Já tem uma conta? Faça login</Link>
    </div>
  );
}

export default Cadastro;
