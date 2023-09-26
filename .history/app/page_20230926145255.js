"use client";
import BlogCard from "../components/BlogCard";
import { useState, useEffect, useContext } from "react";
import PostContext from "../context/PostContext";
import axios from "axios";
import Tag from "../components/Tag";
import Image from 'next/image'

export default function Home() {

  const [posts, setPosts] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  return (
    <>

    </>
  )
}
