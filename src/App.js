import React from 'react';
import './App.css';
import Button from './assets/components/Button';
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import Product from './assets/components/Product.js';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';
import Tile from "./assets/components/Tile";

function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
          <Button isDisabled={false}>to the collection</Button>
          <Button isDisabled={false}>shop all bags</Button>
          <Button isDisabled={true}>pre-orders</Button>
        </nav>

        <main>
          <Product
              image={bag_1}
              title="The handy bag"
              price="&euro;400,-"
              redtitle="Best Seller"
          />
          <Product
              image={bag_2}
              title="The stylish bag"
              price="&euro;250,-"
              redtitle="Best Seller"
          />
          <Product
              image={bag_3}
              title="The simple bag"
              price="&euro;300,-"
              redtitle="New Collection"
          />
          <Product
              image={bag_4}
              title="The trendy bag"
              price="&euro;150,-"
              redtitle="New Collection"
          />
        </main>
        <footer>
          <Tile
              title="the brand">
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis debitis doloremque error exercitationem explicabo illum libero quas quos sapiente ullam!</p>
          </Tile>
          <Tile
              image={brand}
          />
          <Tile
              image={our_story}
          />
          <Tile
              title="our story">
            <p> ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis debitis doloremque error exercitationem explicabo illum libero quas quos sapiente ullam!</p>
            <p>test2</p>
          </Tile>
        </footer>
      </>

  );
}

export default App;

// Component aanroepen met property's? Dan gebruik maken van <Naam />
// Compinent aanroepen met property's maar ook children? Dan <Naam properties en closen > en dan de childeren in een element
// Bij 60 t/m 63 kan je dus meerder paragrafen meegeven (wel apart maken in app.js) maar op deze manier hoef je deze niet in de component elke keer apart te benoemen want je maakt gebruik van de children van het
// Lorem.

