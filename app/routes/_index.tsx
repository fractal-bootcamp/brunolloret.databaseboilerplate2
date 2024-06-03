import type { MetaFunction } from "@remix-run/node";
import About from './about'
import EqualZero from './EqualZero'
import LearningToLearn from "./LearningToLearn";
import BabylonianTalmud from "./BabylonianTalmud";
import TheNewestTestament from "./TheNewestTestament";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};



const Header = () => {
  
  return(

<header>
  
  <nav>
    <div>
      <div className='font-serif '>
        <h1 style={{color: "black"}}>Bruno's site</h1>
      </div>
      
    </div>
  </nav>
    <div className='font-serif'>
          <p>
          I am Bruno Lloret — a writer, researcher, teacher, and into CS stuff. 
          </p>
        <ul>
          <div className= ''>
              <li>
                <a href='/projects/'>
                  Current projects
                </a>
                {/* <li><a href='/EqualZero/'><EqualZero /></a></li>
                <li><a href='/BabylonianTalmud/'><BabylonianTalmud /></a></li>
                <li><a href='/TheNewestTestament/'><TheNewestTestament /></a></li>
                <li><a href='LearningToLearn/'><LearningToLearn /></a></li> */}
              </li>
        </div>
          <li>
            <a>
              You can find me on
            </a>
              <ul>
              <a href='https://x.com/brunolloret'> X</a>
              </ul>
              <ul>
              <a href='https://www.instagram.com/lloret.bruno/'>IG @lloret.bruno</a>
              </ul>
              <ul>
              <a href='https://www.linkedin.com/in/bruno-lloret-b8793b289/'>LinkedIn </a>
              </ul>
              <ul>
              <a href='https://www.youtube.com/channel/UCk7Np9w0LQDpKRNmyoPr9mQ'>YT</a>
              </ul>
          </li>
         
          <li>
              <a href='/about/'>
                  More about me
              </a>
            </li>
        </ul>
    </div>
  </header>

  )


}
  


export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>

      <Header /> 

    </div>
  );
}
