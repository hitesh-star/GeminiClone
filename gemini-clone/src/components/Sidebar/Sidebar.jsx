import React, { useState } from "react";
import "./Sidebar.css";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Sidebar = () => {
    const [expanded,setExpanded]=useState(false);
    const {onSent,prevPrompts,setRecenetPrompt,newChat}=useContext(Context)

    const loadPrompt=async(prompt)=>{
      setRecenetPrompt(prompt);
       await onSent(prompt);
    }

  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={()=>setExpanded(prev=>!prev)}
          className="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAADPz8+WlpZLS0v7+/vu7u5vb29TU1PDw8Pz8/N8fHyCgoITExMzMzOsrKyPj4+6urrU1NTo6Oizs7NCQkJkZGQoKCilpaUtLS05OTmenp7IyMiFhYVaWlpqamoLCwt+baPtAAACfUlEQVR4nO3di27CMAyF4TBWoAxYx2UX2Abv/5RbpSE2aXLSJpJl5/+ewEdQSlLXCQEAAAAAAAAAAAAAAAAA/Fu2H5/3dnyu2uWgfLv5xJ75Ljlf02kXO1LXpAWcHbQrHe0wSwm4XGvXmWGdcDU2G+0qs2ziX9SVdo2ZVrGAW+0Ks20jCZ+1C8z2LAecaddXgPx7+qhdXgGPYsKzdnkFnMWEL9rlFfAiJrxol1eCmFC7uCLEhJb/sV2txYT32uUVcBATWl03/daJCd+1yyvgXUzo4Mf0IgcMr9oFZnuNJGzetCvM9BZdIFq/EiNXof3v6SkeMISpdpUZpikBQ3jSrnO0p7SA3+tgixvCk8k8aS/xx2561K53oGOXvuV9Dbm9s2M7OB4AAAAAAAAAALBj2Z6mdpwGvm4Rmv1C+1nSYIt94rsIvdZmN/umTQ34oF3qaA9pAe19QW8WKQFtPuG+mscDWu/0lru8g4dm/Vi7gvVXZqIvzTTa9RUg3xbtNgvdyG1Ddm+FN/JN0Vqf0H82YkL7LcKxJmHt6oqo/DO0uaj46ygm9P9b6v9+6P8/jf//pRWsLfyvDytY41ewT2P5ppi411bBfmkFe949588tAAAAAAAAAACAJc7nRO06aw/Yhs36mtkcen1Onte21y51tMSZe+7nJp60q8ySMPvS/fzSxvrc+egMWtvzWXuxOcLa9RXg+yrsyVei/5nsdg+zupHn6vs/G0G7uiIqT2j9ft+Tz5mxuWz6Sz4ryHqXd0/u9Lbfqh9t1nd/7loFZ+eZf2kmev5hBWdY+j+HtIKzZCs4Dzj4P9O5Z+1c7g9euAAAAAAAAAAAAAAAAABQhS+ZyFZoP93BCgAAAABJRU5ErkJggg=="
          alt=""
        />
        <div onClick={()=>newChat()} className="new-chat">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY6FdCkoS9Vh03mZREhut8koRY0p6T3ewzZA&s"
            alt=""
          />
          {expanded?<p>New Chat</p>:null}
        </div>
        {
            expanded?<div className="recent">
            <p className="recent-title">Recent</p>
            {
              prevPrompts.map((item,index)=>{
                return (
                  <div key={index} onClick={()=>loadPrompt(item)}className="recent-entry">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <p>{item.slice(0,18)}...</p>
              </div>
                )
              })
            }
            </div>:null
        }
        
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
            <img src="data:image/png;base64,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" alt=""/>
            {expanded?<p>Help</p>:null}
        </div>
        <div className="bottom-item recent-entry">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKsAAACUCAMAAADbGilTAAAAZlBMVEX///8AAAClpaVcXFz19fX8/Pz4+PjBwcHJycmxsbE+Pj7W1ta9vb1JSUnl5eWcnJzt7e0ICAgmJiaCgoIWFhYwMDB2dnaNjY1EREQhISGTk5MrKyvQ0NBtbW18fHxkZGQ3NzdTU1OI67CPAAAG6klEQVR4nO1c6dayIBAuc0lxK600tfL+b/LTNgdcgAHzPd/x+Z36NAyzw2azYsWKFStWrFixYoVm2GHpuK7xhus6ZWguzWkIoR8lVZ0V6faLtPDqKon8eGluFMrLzjsetoM4HLPdhSzN8A1SpcMsIY63xemaYZTzib5QRPGC2hvvb6JEX+qQlAvprumfpZi2SG/+ArK1fBE17SOv9r+mGt6PGKYtTrfwp1QNLNGXbF3rV0StMhtjcciPDy/LgiDzHqfjuJLUPxKtaQybqSKokqvrkKdlsuOQOMblVgUjhJ1f7DEyaKe8m+GTgZW1iBudH0NPXOYX7T7ofzZPfDIhppj41YADvs/tydy+jAqXH03FxDj112Je62X0tC9zbLFHbbev5v58TO0r861D7cg8b/Tsh/szqpkhaSfNq8f8Wdk3iIKhmieIzVEm9C7LDUEVkkNEUw181FdMn1b54xw+zKW/UaHNI9nRkpVSeSE4dKxyVZBGfKF1VrdT2FPmMVWUBWP69Lrb+A7f7ZWq73ML+L671v1FrVqgTJVRqUOkcX+5FFUBU8UXlA/JnvR52xh6x5RL1TKqe3XhZYGU7dpp219UDsilat6f5r7gfZ7KLdD+K46CR73/Pk1ZVm64YX3+Wcr7POVckAEieS159TYlYQ1eGXGf9r8Kc+H80oLrVaMEG3/sSfLaIfDvV/xaRLe0d95PQxjJoOLDb4hSPHcnAYmAiAnouO64v90DrieMke3c9bmRog3EmhoCj8twpUI3kZePc902gg2BvbqL6JQU1xhoQYCodQF3msVQW3MhIyjFFWrBgb9vJz7W5Bg2CI1f+5onWzmuZgKWTV6wFliXHGqr3ab7juHuJ+MiOa6bskuMU4QpcIBggVibPI5EbXaXThbPJLlaQLAJIjistwM42fHlY76mNpkkVxgZnxDOiwxxNWAOOpEry3KFexmRgttgXb7KQIXynkau+07P7gglIP2CDgONXDfgY4jQ0IoG6EEUOrkC54Wpw5B6mutVJ9dwK/0IhWikC/jCcWKt5LluQJkLw9UcLbM3yKfSIwRXoHGoXMYd4PjGdB8FwRUoASImaDBQv34u/5nz1xFc45P8MxQGHcLpzK0NILiaXQtiwsBMod/BzJM9P4JFcAUKl+LqRYSttyelyIswXLso9oCr6TAO4T7ValHkWnZiQVblCbBbQSmaE2O4ki4smvAyk3DfDiGVaWFguIZdjndD8GxhPRsn+U5qXTBc484QVNIsPyDGNXLltiaGK8i6uAUQnei4esIO074g/qAGgDS4FjZA0eJcxXssGMXRAHpk4yJm6hbiyvTBxAoUC+lASLfatrVIe2GhvbXZFzRZj9/FXMpm9bPgI6/ArccX4BAzasBdWA0+toVt2/KVfIudNOA0ZTTELo2E3ProXRFlJpfVA3/qH5dd1oye1AhftaYU0dbb1zTZNJoIK5RjbZAHnRCpcMjmQLdxSwtyGGwb2flaH+5OHkDMKu3oDlPPDSnPh+mUWWyNYUwXlXNuiusD14hmhiSDkZ8p1zI2UI0OmOZTy6KCXB8jv1KtEbUoO7OXIF9BlZ3HKsyKtbcnzE4qIt3NQVhgkPA8/BOgAgrRABgdwU/TOd/K2MgCA3uhMGAIxhXP+Gn7T1N/7O+q1eA/AFXYg8q0qlEc0vsYD8XexhdgZ6hMj00C9IyUZkxhYXOmmWUQmmN6cQCg/4bxs3zYYPwb0+MEgG5ylrMsir1jCBP0Y0bMo9r71XryNGBTfoZZcMVZBxogBtrW2s8vxGCsPlB+O1Xd1m63VGdzGMDqNjI0HAWceXrokAMU7E6rLVCfJWNBZfs3jVqgYUavB6qaprxZO+iYfeyBCu61ja3rmSllYcLChC4rO9OsLjUFpckYzDUDzcyW6zjLxMyWq7+wAz2z/1DW2Tln9imP0AhC8SwTfRbioNsbOnS1WrBnMYiYHv/Sfsak17PYoQ0ie3ZnjpN8zPndTLL3+QZ7JqqY51wvM2CW3hC10v5Zs3lSzt40nBdJbuCBM3yzHIvb0HPmr08Fcu16humMZyM3VCHmo2+iR/lst39aesYzpw38nmgalfubZ3mbzVH3vtne1jB1uURM/Hv/ofnPSDfB/MAgbztkZvhkQBuscsGz581mdoevdMjbM/2GQ8LYBmf6syXP9G/oIzKsOhwfD+/v3JXQQu0OimJOU9VHXOHv9kh+e7dHe2fKWfjGHIj8/PM7UxqYDuIummSyhzwj4v1N6j6aw0Vo0nMmmKEhrLdFFM8VqAiD3AToHjGXFcwCctllxdhdX8UfuuvrBdOJkvMuOFF3qGW7cxI5f+sOtTesxq8yd9MttOtXrFixYsWKFStW/If4B9JAUFMWlJ3xAAAAAElFTkSuQmCC" alt=""/>
            {expanded?<p>Activities</p>:null}
        </div>
        <div className="bottom-item recent-entry">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAb1BMVEX///8AAABERETu7u6amprd3d37+/v4+PhlZWW8vLxqamrk5OSMjIwgICA9PT3x8fG0tLRvb2/V1dVNTU2UlJQzMzMoKCjPz8/IyMjBwcGHh4eoqKiYmJgaGhouLi4NDQ1/f39UVFR2dnatra0TExMU/KpIAAAC90lEQVR4nO3ca3vaIBiAYdB4SBq1VqeubrXq/v9v3IJztvJiyMyh4HN/87oghbckIZyUAgAAAAAAAAAAAAAAAAAAAAAAAABEL5/2rs26LlPLht+0ZdN1oVr2ZIdAv3ZdqJZthRisui5Uy8ZCDHS/61K1SwqBfu66VE1LP/5YizEYf0wyGLRbvhZkure+/PohxuDnJcEs1zq2IGRFHefnHsDLmxgDnQz/Jjjuip9PXZW2EedH4PJPJfuJHAAjKxrL+hyimFpC9q+Oq/T9RgQKi3R++RFPEMQXoZ9Yboc7QhBLS8jKKxp7EO5qBYXwb4c7W0EMLaGGEITeEu6+EU5Cbgm1tIKwg1DWHapg1HVd/temthCMy//YV1XT4yDop6I0anixytPTfT7bbPc3U+Yd1+MuubNak+Xn/+0odYdhN3RcPggjV7W2wkPuZeFIfGy/4HV6Fit1cDzm019S6l67Ra6f9L/97kw9k5KvnckDsbeqtLvZ4TnYMQi3g3RiDyBPSmYRXq0cWTtFbYzdWy591c+tLGHPvcys+nhMrE6v8yTNF7RB1rTi0iOT1bOaNF7O5ow21/MIftOqVuSSMPvKw0HSs24E3yUG9uKE3Xsa2qfjcS72dhae2VMps97nITWHvlgHrdPyrMZwJef3eZp8FY4YTLybs+NbK6QXhCMGB+8LDKKNgfs7wRJtDCosvpNHYyOIQYUryPPz4cdgWuEK8rhD+DGoMjgsL1gKPwb+rwXXi4EYxBAD7gWeiUaFK8T6bqSPpOkrF/hm0nrlPW+4jDYG/jdDBGMozYylLYIaS1OuMVXPqcMoxlRP6htbD3nKkTkW5toM5lyZezf2VpUebg2GuBbHPd0U5Voc1mSxNk+xRlOVrdV9e4i1uqzZZu2+Yg+HwV4exZ4ug719ij2eBnt9FXu+Dfb+K86AMDgLRHEmjMHZQIozogzOCrsmxiD6M+M+4+xAzpAscJYoZ8oanC0MAAAAAAAAAAAAAAAAAAAAAAAAAA/pN1sWJOrLN+VLAAAAAElFTkSuQmCC" alt=""/>
            {expanded?<p>Setting</p>:null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
