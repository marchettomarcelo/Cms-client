import axios from "axios";
import Link from "next/link";

function escapeRegExp(string:string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function ReplaceAll(str: string, find:string, replace: string) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function Mpp({post}:any) {
    return (
    
      <div className="p-4">
      <h1>Voce conseguiu Men, Voce é brabo, agr vai var os posts</h1>

        
        {post.map((path:any, id:number)=>{
          if(path.substring(0,5) === "00000" && path.substring(25,30)){
            return
        }

          const tituloComHifen = ReplaceAll(path, " ", "-")

          return (
            <ul className="bg-yellow-100 text-blue-800 my-4 cursor-pointer" key={id}>
              <Link href={`/posts/${tituloComHifen}`} passHref>
              <a>{path}</a>
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
    const {data} = await axios.get(`${process.env.FETCHING_URL}/posts-for-publishing`) 

    const soUrls = data.map((post:any)=>{      
      const titFormatado = ReplaceAll(post.path ,"-", " ")
      return titFormatado
    })

    return {
      props:{post: soUrls}
    }
}
