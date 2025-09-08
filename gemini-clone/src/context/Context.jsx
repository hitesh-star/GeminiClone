import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    
    const [input,setInput]=useState("");
    const [recentPrompt,setRecenetPrompt]=useState("");
    const [prevPrompts,setPrevPrompts]=useState([]);
    const [showResult,setShowResult]=useState(false);
    const [loading,setLoading]=useState(false);
    const [resultData,setResultData]=useState("");

    const delayPara=(index,nextWord)=>{           //to add typing effect
          setTimeout(function (){
             setResultData(prev=>prev+nextWord)
          },75*index)
    }
    const newChat=()=>{
        setLoading(false);
        setShowResult(false);

    }
    const onSent=async(prompt)=>{
        setResultData("");
        setLoading(true);
        setShowResult(true);
        let response;
        if(prompt!==undefined){
            response=await run(prompt);
            setRecenetPrompt(prompt);
        }else{
            setPrevPrompts(prev=>[...prev,input]);
            setRecenetPrompt(input);
            response=await run(input);
        }
        let responseArray=response.split("**");
        let newResponse="";            //it is a string
        for(let i=0;i<responseArray.length;i++){
            if(i===0 || i%2===0){
                newResponse+=responseArray[i];
            }
            else{
                newResponse+="<b>"+responseArray[i]+"</b>";   //make it bold if **
            }
        }
        let newResponse2=newResponse.split("*").join("<br>");   //shift in new line if *
        let newResponseArray=newResponse2.split(" ");
        for(let i=0;i<newResponseArray.length;i++){
              const nextWord=newResponseArray[i];
              delayPara(i,nextWord+" ");
        }
        // setResultData(newResponse2);
        setLoading(false);
        setInput("");
    }

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecenetPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat
  };

  return(
  <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  )
  
};
export default ContextProvider;
