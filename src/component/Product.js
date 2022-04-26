import salmon from './Assets/salmon.jpeg';
import jollof from './Assets/jollof.jpg';
import burger from './Assets/burger.jpg';
import soup from './Assets/soup.jpeg';
import spaghetti from './Assets/Spaghetti.jpeg';
import sandwich from './Assets/Sandwich.jpeg';
import chicken from './Assets/chicken.jpeg';
import './Product.css';


 function App() {
     return (
          <>
  <div class="menu">
          <div class="headertop">
              <h3>Our Menu:</h3>
          </div>
          <div class="food-items">
             <img src={jollof}/>
             <div class="details">
             <div class="details-sub">
              <h5>Nigerian Jollof Rice</h5>
              <h5 class="price">N1000</h5>
            </div>
             </div>
          </div>

          <div class="food-items">
             <img src={salmon}/>
             <div class="details">
             <div class="details-sub">
              <h5>Grilled Salmon</h5>
              <h5 class="price">N3000</h5>
            </div>
             </div>
          </div>

          <div class="food-items">
             <img src={sandwich}/>
             <div class="details">
             <div class="details-sub">
              <h5>BBQ sandwich</h5>
              <h5 class="price">N1000</h5>
            </div>
             </div>
          </div>

          <div class="food-items">
             <img src={chicken}/>
             <div class="details">
             <div class="details-sub">
              <h5>Grilled Chicken</h5>
              <h5 class="price">N1000</h5>
            </div>
             </div>
          </div>

          <div class="food-items">
             <img src={soup}/>
             <div class="details">
             <div class="details-sub">
              <h5>Soup</h5>
              <h5 class="price">N1000</h5>
            </div>
             </div>
          </div>

          <div class="food-items">
             <img src={spaghetti}/>
             <div class="details">
             <div class="details-sub">
              <h5>Spaghetti</h5>
              <h5 class="price">N2000</h5>
            </div>
             </div>
          </div>
  </div>

      </>

   );
}

export default App;
