import Link from "next/link";
import axios from "axios"
// import Image from "next/image"
import HeaderComponent from "../../Components/Header"
import ReactMarkdown from 'react-markdown'

interface Post{
    _id: string,
    titulo: string,
    conteudo: string,
    __v: number
}

export const getStaticPaths = async () => {
    
    const { data } = await axios.get(`${process.env.FETCHING_URL}/posts-for-publishing`)
    const arr = Array.from(data)
    
    const paths = arr.map((post:any) => {
      
      return { params: { titulo: post.path } };
    });
  
    return {
      paths,
      fallback: false,
    };
  };
  
  export const getStaticProps = async ({ params: { titulo }}: any) => {

    const { data } = await axios.get(`${process.env.FETCHING_URL}/onepost`, 
        { params: { titulo } }
    )
    
    return {
      props: { post: data },
    };
  };

// import bgimage from "../../public/bgimage.jpeg"

const Page = ({ post }: any) => {
  
  const {_id , path ,info ,publishOnNextBuild, HTMLContent} = post

    return (
      <>
      <HeaderComponent />
      <div className="flex items-center justify-center flex-col gap-6">
       
        <div className="w-4/5 border-2 border-gray-400 rounded pl-6 p-4">
        
          <article className="prose prose-base w-full">
            
            <ReactMarkdown>
              {info}
            </ReactMarkdown>
          </article>
        </div>
    

        <Link href="/posts" passHref>
          <div className="bg-red-500 w-full cursor-pointer p-2">
            <a className="font-semibold text-4xl">Post page</a>
          </div>
        </Link>
        
      </div>
      </>
    );
  };
  
  export default Page;
  