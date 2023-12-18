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
            className='object-cover w-full'
        />
        {/* animate the image to zoom in on appearance kinda like animate presence */}
        <PageTitle title={post?.title}/>
        <div className="p-6 text-gray-700 dark:text-[#eee]">

        <p className="leading-loose mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod metus ac tortor consectetur, a dignissim nisl pharetra.
            Proin eget augue vitae justo efficitur dictum eu ac ligula. Nulla facilisi. Vestibulum nec leo non justo fermentum
            tristique. Aliquam luctus ante in turpis vestibulum, a dapibus massa venenatis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod metus ac tortor consectetur, a dignissim nisl pharetra.
            Proin eget augue vitae justo efficitur dictum eu ac ligula. Nulla facilisi. Vestibulum nec leo non justo fermentum
            tristique. Aliquam luctus ante in turpis vestibulum, a dapibus massa venenatis.
        </p>
        <p className="leading-loose mb-4">
            Fusce sed fringilla elit. Suspendisse potenti. Integer ac metus eu tortor feugiat fringilla. Aenean id neque vel ex
            commodo blandit eget non sem. Duis ullamcorper mauris ut tellus finibus, et fringilla ex cursus.
            Fusce sed fringilla elit. Suspendisse potenti. Integer ac metus eu tortor feugiat fringilla. Aenean id neque vel ex
            commodo blandit eget non sem. Duis ullamcorper mauris ut tellus finibus, et fringilla ex cursus.
        </p>
        <blockquote className="italic border-l-4 border-blue-500 pl-4 mb-4">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod metus ac tortor consectetur.&quot;
        </blockquote>
        <p className="leading-loose mb-4">
            In hac habitasse platea dictumst. Nunc sit amet elit et felis blandit vulputate. Quisque eu felis eget arcu iaculis
            imperdiet. Sed quis justo vel lacus congue feugiat eu et sapien. Integer nec odio vitae massa
            bibendum bibendum.
            In hac habitasse platea dictumst. Nunc sit amet elit et felis blandit vulputate. Quisque eu felis eget arcu iaculis
            imperdiet. Sed quis justo vel lacus congue feugiat eu et sapien. Integer nec odio vitae massa
            bibendum bibendum.
        </p>
        <p className="leading-loose mb-4">
            Curabitur consequat felis eget purus scelerisque, vel venenatis nisi fringilla. Duis consequat ligula vitae mi
            tincidunt, id venenatis urna sagittis. Integer vel leo eu libero facilisis laoreet at a massa.
            Curabitur consequat felis eget purus scelerisque, vel venenatis nisi fringilla. Duis consequat ligula vitae mi
            tincidunt, id venenatis urna sagittis. Integer vel leo eu libero facilisis laoreet at a massa.
        </p>
        </div>
    </div>
  )
}

export default Page