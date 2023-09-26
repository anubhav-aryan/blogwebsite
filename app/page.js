"use client";
// import BlogCard from "../components/BlogCard";
import { useState, useEffect, useContext } from "react";
// import PostContext from "../context/PostContext";
import axios from "axios";
// import Tag from "../components/Tag";
import Image from 'next/image'

export default function Home() {

  const [posts, setPosts] = useState([
    {
      title: "How to use React",
      subheading: 'React is a great framework',
      image: "https://images.unsplash.com/photo-1622837137190-4b3b8b5b5b0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3QlMjBmb3JtYXQlMjB3b3JrZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      tag:"React"
    }
  ]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     try{
  //       const data = await axios.get("/api/posts");
  //       setPosts(data.data);
  //     }catch(error){
  //       setError("Error Fetching Posts");
  //     }
  //   }
  // }, []);
  
  if (posts?.length === 0) {
    return <div className="text-center">No posts found...</div>
  }

  // if (error) {
  //   return ( <div className="text-center">
  //     <img src="#" alt="Error" className="w-96"
  //     />
  //   </div>
  //   )
  // }

  return (
    <>
    <div className="min-h-screen p-10 lg:p:20">
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-10 flex flex-col justify-center items-center uppercase tracking-widest h-96 ">
        <span className="text-5xl border-b-4 pb-3 font-bold">
          Anubhav's Blog
        </span>
          <p>Like, share and subscribe</p>
        
      </h2>
    </div>
    </>
  )
}
