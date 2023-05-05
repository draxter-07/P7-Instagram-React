export default function Stories(){
    const users = ['9gag', 'meowed', 'barked', 'nathanwpylestrangeplanet', 'wawawicomics', 'respondeai', 'filomoderna', 'memeriagourmet'];
    return(
        <div class="stories">
            {users.map((user) => 
            <div class="story">
                <div class="imagem">
                    <img src="assets/img/9gag.svg" alt="9gag"/>
                </div>
                <div class="usuario">
                    {user}
                </div>
            </div>)}

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
    )
}
