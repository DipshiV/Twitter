import React, { useState , useRef} from "react";
import "./CSS/TweetBox.css";
import { Avatar, Button } from "@mui/material";
import image from "../WhatsApp Image 2023-05-28 at 8.47.42 PM.jpeg"

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [ msg , setmsg] = useState("")
  const hsRef = useRef(msg)


  const sendTweet = () => {
   setmsg(hsRef.current+" " +tweetMessage)
   setTweetMessage("")
    
  };

  return (
    <>
    <div className="tweetBox">
      <form onSubmit={sendTweet}>
        <div className="tweetBox__input">
          <Avatar src={image} />
          <input
            onChange={(e) => {
              setTweetMessage(e.target.value)
              
            
            }}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="file"
        />
        
        <Button
         onClick={sendTweet}
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>

      
    </div>
    <div style={{width:"30vw" , height:"10vh" }}>{msg} </div></>
  );
}

export default TweetBox;
