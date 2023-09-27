import Link from "next/link";

import React from 'react'

const BlogCard = (
    tag,title,img,id 
) => {
  return (
    <div>
      <Link href={'/post/${id}'}> 
      <div className="rounded-lg object-cover">
        <img src={img} alt="" className="rounded-t-lg object-cover h-40 w-full" />
     </div>
      </Link>
    </div>
  )
}

export default BlogCard
