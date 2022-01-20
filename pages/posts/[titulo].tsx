import axios from "axios"
import Image from "next/image"

interface Post{
    _id: string,
    titulo: string,
    conteudo: string,
    __v: number
}

export const getStaticPaths = async () => {
    
    const requestDada = await axios.get("https://cms-ts-test-um.herokuapp.com/post")
    const createPaths = requestDada.data
    
    const paths = createPaths.map((post:Post) => {
      return { params: { titulo: post.titulo } };
    });
  
    return {
      paths,
      fallback: false,
    };
  };
  
  export const getStaticProps = async ({ params: { titulo }}: any) => {
    

    const {data} = await axios.get("https://cms-ts-test-um.herokuapp.com/onepost", 
        { params: { titulo } }
    )
    
    return {
      props: { post: data },
    };
  };

// import bgimage from "../../public/bgimage.jpeg"

const Page = ({ post }: any) => {
    return (
      <div >
       

        <div>{post.titulo}</div>
        <div>{post.conteudo}</div>
      </div>
    );
  };
  
  export default Page;
  