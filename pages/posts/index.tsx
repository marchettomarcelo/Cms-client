import axios from "axios";
import Link from "next/link";

function Mpp({post}:any) {
    return (
    
      <div className="p-4">
      <h1>Voce conseguiu Men, Voce é brabo, agr vai var os posts</h1>

        
        {post.map((titulo:any)=>{
          return (
            <ul className="bg-yellow-100 text-blue-800 my-4 cursor-pointer">
              <Link href={`/posts/${titulo}`}>
              <a>{titulo}</a>
              </Link>
            </ul>
          )})}

        <Link href="/">
          <a className="font-semibold text-4xl">Main Page</a>
        </Link>
        
      </div>
    
      );
  }
  
  export default Mpp;
  

  export const getStaticProps = async () => {
    const {data} = await axios.get("http://localhost:3001/post") 
    const soUrls = data.map((post:any)=>{
      return post.titulo
    })

    return {
      props:{post: soUrls}
    }
}
