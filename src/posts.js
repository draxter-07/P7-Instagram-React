export default function Posts(){
    const users_post_like = [['meowed', 'gato-telefone.svg', ['101.523', 'respondeai']], ['barked', 'dog.svg', ['99.159', 'adorable_animals']]];
    function like_reaction(){
    }
    return (
        <div>
        {users_post_like.map((data) => 
          <div class="post" data-test="post">
            <div class="topo">
              <div class="usuario">
                <img src={"./assets/img/" + data[0] + ".svg"} alt={data[0]}/>
                {data[0]}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src={"./assets/img/" + data[1]} alt="dog" data-test="post-image"/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline" data-test="like-post" onClick={like_reaction}></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline" data-test="save-post"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src="assets/img/adorable_animals.svg" alt="adorable_animals"/>
                <div class="texto">
                  Curtido por <strong>{data[2][1]}</strong> e <strong data-test="likes-number">outras {data[2][0]} pessoas</strong>
                </div>
              </div>
            </div>
          </div>)}
        </div>)
}