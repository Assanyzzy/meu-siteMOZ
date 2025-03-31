import Image from "next/image";
import { supabase } from '../lib/supabase';

export default function Home() {
  return (
      <div>
          <h1>Painel Administrativo</h1>
          <a href="https://seu-usuario.github.io/meu-site/">Voltar ao site</a>
      </div>
  );
}

export default function Admin() {
    async function buscarUsuarios() {
        const { data, error } = await supabase.from('usuarios').select('*');
        if (error) console.error(error);
        else console.log(data);
    }

    return (
        <div>
            <h1>Painel Administrativo</h1>
            <button onClick={buscarUsuarios}>Carregar Usuários</button>
        </div>
    );
}
