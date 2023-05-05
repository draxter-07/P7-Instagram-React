export default function User(){
  function alterar_user(){
    let new_user = window.prompt("Novo usuário");
    if (new_user.length != 0){
      document.getElementById("username").innerHTML = new_user;
    }
  }
  function alterar_img(){
    let new_img = window.prompt("Nova imagem");
    if (new_img.length != 0){
      document.getElementById("userimg").src = new_img;
    }
  }
   return(
        <div class="usuario">
          <img id="userimg" src="assets/img/catanacomics.svg" alt="imagem de perfil" data-test="profile-image" onClick={alterar_img}/>
          <div class="texto">
            <span>
              <strong data-test="name" id="username">catanacomics</strong>
              <ion-icon name="pencil" data-test="edit-name" onClick={alterar_user}></ion-icon>
            </span>
          </div>
        </div>
    )
}

