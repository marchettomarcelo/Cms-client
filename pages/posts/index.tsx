import axios from "axios";
import Link from "next/link";

function Mpp({post}:any) {
    return (
    
      <div className="p-4">
      <h1>Voce conseguiu Men, Voce é brabo, agr vai var os posts</h1>

        
        {post.map((titulo:any, id:number)=>{
          if(titulo.substring(0,5) === "00000" && titulo.substring(25,30)){
            return
        }

          return (
            <ul className="bg-yellow-100 text-blue-800 my-4 cursor-pointer" key={id}>
              <Link href={`/posts/${titulo}`} passHref>
              <a>{titulo}</a>
              </Link>
            </ul>
          )})}

        <Link href="/" passHref>
          <a className="font-semibold text-4xl">Main Page</a>
        </Link>
        
      </div>
    
      );
  }
  
  export default Mpp;
  

  export const getStaticProps = async () => {
    const {data} = await axios.get(`${process.env.FETCHING_URL}/post`) 
    const soUrls = data.map((post:any)=>{
      return post.titulo
    })

    return {
      props:{post: soUrls}
    }
}
