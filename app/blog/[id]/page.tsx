import PageTitle from "@/components/PageTitle"
import { fetchBlogPostById } from "@/lib/_data"
import Image from "next/image"


const Page = (
    {params}: {params: {id:string}}
) => {

    const post = fetchBlogPostById(params.id)

  return (
    <div
        className="flex flex-col w-full justify-center items-center pt-[8em]"
    >
        <Image
            src={post?.imgURL || '/blogpic.jpg'}
            alt='blog post image'
            width={5000}
            height={5000}
            className='object-cover w-full rounded-lg'
        />
        {/* animate the image to zoom in on appearance kinda like animate presence */}
        <PageTitle title={post?.title}/>
    </div>
  )
}

export default Page