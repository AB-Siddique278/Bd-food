

import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div>
    <div className='container'>
    <Navbar></Navbar>
    </div>
      <div className='container row row-cols-1 row-cols-md-3 g-4 mx-auto mt-5'>

        <div class="col">
          <div class="card">
            <img src="https://www.themealdb.com/images/media/meals/n7qnkb1630444129.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Burger</h5>
              <p class="card-text">this food is very good text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <button type="button" class="btn btn-outline-primary">Add to cart</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://www.themealdb.com/images/media/meals/0jv5gx1661040802.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Pasta</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <button type="button" class="btn btn-outline-primary">Add to cart</button>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src="https://www.themealdb.com/images/ingredients/Chicken.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Chicken </h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <button type="button" class="btn btn-outline-primary">Add to cart</button>
            </div>
          </div>
        </div>
















      </div>
    
    </div>
  );
}

export default App;
