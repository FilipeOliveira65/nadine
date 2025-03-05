// {
//   var menu = document.getElementById("menu");
//   var menuContents = document.getElementById("navbar");

//   menu.addEventListener("click", function() {
//       if (menuContents.style.display === "none") {
//           menuContents.style.display = "flex";
//       } else {
//           menuContents.style.display = "none";
//       }   
//   })
// }

export default function Header() {
    return (
      <header>
        <div className="logo">
          <h3>
            Nadin<span className="rot">e</span>
          </h3>
        </div>

        <div id="menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
  
        <nav id="navbar">
          <ul>
            <li>
              <a href="home.html">Home</a>
            </li>

            <li>
              <a href="about.html">Sobre</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
