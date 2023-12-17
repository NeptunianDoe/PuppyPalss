import {puppyList} from "./data.js";
import { useState } from "react"; //helps to reflect updated data via react component 
import "./App.css"; 


function App() {
const [puppies, setPuppies] = useState(puppyList);//usestate returns an [] with 2 elements.1st element= value stored, 2nd element= a function to reset the value. This is the deconstructed values from the []. Always pass your useState hook a defualt value...
const [featPupId, setFeatPupId] = useState(null);//the default value is set to null so you can conditionally render an elemnt in your JSX code ...now how do I set this Id?
//console.log(useState(puppyList)) //produces same output as console.log below
//console.log("puppyList: ", puppyList);

const featuredPup = puppies.find((pup) => pup.id === featPupId);
console.log(featPupId);

return (
    <>
      <h1>Puppies</h1>
      {puppies.map((pup) => {
        return (
          <p
            key={pup.id}
            onClick={() => {
              setFeatPupId(pup.id);
            }}
          >
            {pup.name}
          </p>
        );
      })}

      {featPupId && (
        <div className="featuredPup">
          <h2>Featured Pup</h2>
          <h3>{featuredPup.name}</h3>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </>
  );
}


 

export default App

 

//when working with lists of data, React needs a key to maintain the integrity of the order of elements. And, the key should be a unique identifier that comes directly from your data. In this case, the puppies each have a unique ID. So, you will use that as your key.
//After adding the key, there was no warning in browser console
//3{()=>{console.log("puppy id: ", puppy.id)}}//you are now tracking the ID via useSate so you can render the id somehwere in the application
//Not seeing the featured ID chnage for the puppy names
//<p onClick={()=>{console.log("puppy id: ", puppy.id)}} key={puppy.id}> not seeing puppys name 

//deployed website on netlify : https://main--silly-horse-50910b.netlify.app nothing shows up. What is up with my code?: