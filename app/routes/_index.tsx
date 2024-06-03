import type { MetaFunction } from "@remix-run/node";
import About from './about'

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};



const Header = () => {
  
  return(

<header>
  <div>
    <div>
      <h1>Bruno's site</h1>
    </div>
    
  </div>
    
    <nav>
          <p>
          I am Bruno Lloret — a writer, researcher, teacher, and into CS stuff. 
          </p>
        <ul>
        <li>
          <a href='/projects/'>
            Current projects
          </a>
        </li>
          <li>
            <a href='/links/'>
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
    </nav>
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
