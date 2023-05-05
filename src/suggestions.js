export default function Suggestions(){
    const users=['bad.vibes.memes', 'chibirdart', 'razoesparaacreditar', 'adorable_animals', 'smallcutecats']
    return(
        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
          {users.map((user) =>
          <div class="sugestao">
            <div class="usuario">
              <img src={"./assets/img/" + user + ".svg"} alt={user}/>
              <div class="texto">
                <div class="nome">{user}</div>
                <div class="razao">Segue você</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>)}
        </div>
    )
}