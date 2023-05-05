export default function User(){
    return(
        <div class="usuario">
          <img src="assets/img/catanacomics.svg" alt="imagem de perfil" data-test="profile-image"/>
          <div class="texto">
            <span>
              <strong data-test="name">catanacomics</strong>
              <ion-icon name="pencil" data-test="edit-name" onclick="alterar_user()"></ion-icon>
            </span>
          </div>
        </div>
    )
}

