export default function Posts(){
    const users_post_like = [['meowed', 'gato-telefone.svg', ['101.523', 'respondeai']], ['barked', 'dog.svg', ['99.159', 'adorable_animals']]];
    function like_reaction(e){
      let btn = e.target.id;
      let numbers_likes;
      if (document.getElementById(btn).style.backgroundColor == "rgb(255, 50, 50)"){
        document.getElementById(btn).setAttribute("style", "background-color: rgb(255, 255, 255);");
        numbers_likes = Number(String(document.getElementById('likes' + btn.split('likebtn')[1]).innerHTML).replaceAll(".", '')) - 1;
      }
      else{
        document.getElementById(btn).setAttribute("style", "background-color: rgb(255, 50, 50);");
        numbers_likes = Number(String(document.getElementById('likes' + btn.split('likebtn')[1]).innerHTML).replaceAll(".", '')) + 1;
      }
      document.getElementById('likes' + btn.split('likebtn')[1]).innerHTML = numbers_likes;
    }
    function like_img(e){
      let btn = e.target.id;
      let numbers_likes;
      if (document.getElementById('likebtn' + btn.split('img')[1]).style.backgroundColor != "rgb(255, 50, 50)"){
        document.getElementById('likebtn' + btn.split('img')[1]).setAttribute("style", "background-color: rgb(255, 50, 50);");
        numbers_likes = Number(String(document.getElementById('likes' + btn.split('img')[1]).innerHTML).replaceAll(".", '')) + 1;
        document.getElementById('likes' + btn.split('img')[1]).innerHTML = numbers_likes;
      }
    }
    function save_reaction(e){
      let btn = e.target.id;
      if (document.getElementById(btn).style.backgroundColor == "rgb(0, 0, 0)"){
        document.getElementById(btn).setAttribute("style", "background-color: rgb(255, 255, 255);");
      }
      else{
        document.getElementById(btn).setAttribute("style", "background-color: rgb(0, 0, 0);");
      }
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
              <img src={"./assets/img/" + data[1]} alt={data[1]} data-test="post-image" onDoubleClick={(e) => like_img(e)} id={"img" + data[0] + data[1]}/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline" data-test="like-post" id={"likebtn" + data[0] + data[1]} onClick={(e) => like_reaction(e)}></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline" data-test="save-post" id={"savebtn" + data[0] + data[1]} onClick={(e) => save_reaction(e)}></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={"assets/img/" + data[2][1] + ".svg"} alt={data[2][1]}/>
                <div class="texto">
                  Curtido por <strong>{data[2][1]}</strong> e <strong data-test="likes-number">outras <span id={"likes" + data[0] + data[1]}>{data[2][0]}</span> pessoas</strong>
                </div>
              </div>
            </div>
          </div>)}
        </div>)
}