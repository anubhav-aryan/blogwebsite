"use client";
// import BlogCard from "../components/BlogCard";
import { useState, useEffect, useContext } from "react";
// import PostContext from "../context/PostContext";
import axios from "axios";
import Tag from "components/cards/Tag.jsx";
import Image from "next/image";
import BlogCard from "@/components/cards/BlogCard";

export default function Home() {
  const [posts, setPosts] = useState([
    {
      title: "How to use React",
      subheading: "React is a great framework",
      image:
        "https://dummyimage.com/640x360/fff/aaa",
      tag: "React",
    },
  ]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const data = await axios.get("/api/posts");
  //       setPosts(data.data);
  //     } catch (error) {
  //       setError("Error Fetching Posts");
  //     }
  //   }
  // }, []);

  if (posts?.length === 0) {
    return <div className="text-center">No posts found...</div>;
  }

  // if (error) {
  //   return (
  //     <div className="text-center">
  //       <img src="#" alt="Error" className="w-96" />
  //     </div>
  //   );
  // }

  return (
    <>
      <div className="min-h-screen p-10 lg:p-20">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-10 flex flex-col justify-center items-center uppercase tracking-widest h-96 ">
          <span className="text-5xl border-b-4 pb-3 font-bold">
            Anubhav's Blog
          </span>
          <p>Like, share and subscribe</p>
          {[
            ...new Set(
              posts?.map((post) => {
                return post.tag;
              })
            ),
          ].map((tag) => {
            return (
              <Tag
                key={tag}
                tag={tag}
                isSelected={selectedTags.includes(tag)}
                setSelectedTags={setSelectedTags}
              />
            );
          })}
          {selectedTags?.length !== 0 && (
            <button
              onClick={() => setSelectedTags([])}
              className="text-white bg-red-500 px-4 py-2 rounded-md"
            >
              Clear
            </button>
          )}
        </h2>
        {selectedTags?.length === 0 &&
          posts
            ?.filter((post) => {
              return selectedTags?.includes(post.tag);
            })
            .map((post) => {
              return (
                <BlogCard
                  tag={post.tag}
                  title={post.title}
                  subheading={post.subheading}
                  image={post.image}
                />
              );
            })}
      </div>
    </>
  );
}
