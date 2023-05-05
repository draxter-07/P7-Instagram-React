import Stories from "./stories.js"
import Posts from "./posts.js"
import Sidebar from "./sidebar.js"

export default function Body(){
    return (
    <div class="corpo">
      <div class="esquerda">
        <Stories/>
        <Posts/>
      </div>

      <Sidebar/>
    </div>
    )
}