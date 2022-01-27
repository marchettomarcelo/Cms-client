import Link from "next/link";
import axios from "axios"
import Image from "next/image"
import HeaderComponent from "../../Components/Header"

interface Post{
    _id: string,
    titulo: string,
    conteudo: string,
    __v: number
}

export const getStaticPaths = async () => {
    
    const {data} = await axios.get(`${process.env.FETCHING_URL}/post`)
    
    const paths = data.map((post:Post) => {
      return { params: { titulo: post.titulo } };
    });
  
    return {
      paths,
      fallback: false,
    };
  };
  
  export const getStaticProps = async ({ params: { titulo }}: any) => {
    

    const {data} = await axios.get(`${process.env.FETCHING_URL}/onepost`, 
        { params: { titulo } }
    )
    
    return {
      props: { post: data },
    };
  };

// import bgimage from "../../public/bgimage.jpeg"

const Page = ({ post }: any) => {
    return (
      <>
      <HeaderComponent />
      <div>
       

        <div>{post.titulo}</div>
        <div>{post.conteudo}</div>

        <Link href="/posts" passHref>
          <div className="bg-red-500 cursor-pointer p-2">
            <a className="font-semibold text-4xl">Post page</a>
          </div>
        </Link>
        
      </div>
      </>
    );
  };
  
  export default Page;
  