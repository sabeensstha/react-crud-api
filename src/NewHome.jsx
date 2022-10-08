import React, { useEffect } from 'react'
import { useState } from 'react'
import Example from './component/Example'
import Example2 from './component/Example2'
import Footer from './component/Footer'
import Navbarrr from './component/Navbar'
import Slider from './component/Slider'


const Appz =() => {
  const [posts, setPosts] = useState([]);
  const [loading,setloading] =useState(false);
  const ulr ="https://jsonplaceholder.typicode.com/posts?_limit=10";  
  const fetchPost = async () => {
  const response = await fetch(ulr);
   const data = await response.json();
   setloading(!loading);
    setPosts(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);
  // const arr =[1,2,3,1,2,4,5,6,2];
  // function removeDup(a){
  //   return [...new Set(a)];
  // }
  // console.log(removeDup(arr));
  return (
    <div className="App">
    {posts.slice(7,8).map(post=> {
      return(
        <div key={post.id}>
        {loading === false ? <p> {post.body} </p>: <p></p>}
        <button onClick={fetchPost}> get new joke </button>
        </div>
      )
    })}

    </div>
  );
}

const NewHome = () => {
  return (
    <div>
      <Navbarrr />
      <Slider />
      <Appz />
      <Example />
      <Example2 />
      <Footer />
    </div>
  )
}

export default NewHome