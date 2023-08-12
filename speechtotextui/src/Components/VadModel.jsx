import { useMicVAD } from "@ricky0123/vad-react"
import React from 'react'

function VadModel() {
    // console.log('alsdh;askd;asljkdl;jahsdahsl');
    const vad = useMicVAD({
        startOnLoad: true,

        onSpeechStart: (audio) => {
            console.log('working!!!!!!!');
        },

        onSpeechEnd: (audio) => {
          console.log("User stopped talking")
          console.log(audio);
        },
      })
  return (
    
    <div>{vad.userSpeaking && "User is speaking"}</div>
  )
 }

export default VadModel