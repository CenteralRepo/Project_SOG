import axios from "axios";
import React, { useEffect, useState } from "react";

const VideoPage = (props) => {
  const url = process.env.REACT_APP_SERVICE_ID;
  const [videoData, setVideoData] = useState();
  console.log(props.loginData.user.token[0], "props");
  useEffect(() => {
    axios
      .get(url + "/getData", {
        headers: {
          Authorization: `Bearer ${props.loginData.user.token[0].token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setVideoData(res.data);
        console.log(res.data[2].dataURL)
      });
  }, []);
  return (
    <>
      {videoData && (
        videoData.map((i,index)=>{
            return(
            <div>
            <video
              src={i.dataURL}
              width="300"
              height="fit-content"
              controls="controls"
               id={index}
            />
            <br></br>
          </div> )

        })
      
      )}
    </>
  );
};
export default VideoPage;
