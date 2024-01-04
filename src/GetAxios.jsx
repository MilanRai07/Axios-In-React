import axios from "axios";
import { useEffect, useState } from "react";

const GetAxios = () => {
  const [getdata, setGetData] = useState([]);

  //axios
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts") //.get since we are using api to get data
      .then((response) => {
        console.log(response.data);
        setGetData(response.data);
      })


  }, []);
  return (
    <>
      <div>
        {getdata.map((post, ind) => {
          return (
            <div index={ind}>
              <p>{post.title}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default GetAxios;