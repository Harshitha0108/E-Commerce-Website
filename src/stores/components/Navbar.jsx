import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const categoryRoutes = {
    "mobiles": "/mobiles",
    "computers": "/comp",
    "watches": "/watch",
    "men fashion": "/mens",
    "woman dressing": "/woman",
    "furniture": "/furniture",
    "ac": "/ac",
    "fridge": "/fridge",
    "kitchen": "/kitchen"
  };

  const searchCategory = () => {
    const key = searchValue.toLowerCase().trim();
    if (categoryRoutes[key]) {
      navigate(categoryRoutes[key]);
      setSearchValue("");
    } else {
      alert("No such category found!");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchCategory();
    }
  };

  return (
    <div className="navbar-section">
      <div className="navSection">
        <Link to='/' className="custom-link">
          <div className="title">
            <h2>E-Mart</h2>
          </div>
        </Link>

        <div className="search">
          <input
            type="text"
            id="searchInput"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search..."
            onKeyPress={handleKeyPress}
          />
          <button onClick={searchCategory} style={{ marginLeft: "10px", padding: "5px 10px" }}>Search</button>
        </div>

        <div className="user">
          <div className="user-details">SignIn/SignUp</div>
          <Link to='/cart'>
            <div className="cart">cart
              <span>{cartItems.length}</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="subMenu">
        <ul>
          <Link to='/mobiles'><li>Mobiles</li></Link>
          <Link to='/comp'><li>Computers</li></Link>
          <Link to='/watch'><li>Watches</li></Link>
          <Link to='/mens'><li>Men Fashion</li></Link>
          <Link to='/woman'><li>Woman Dressing</li></Link>
          
          <Link to='/furniture'><li>Furniture</li></Link>
          <Link to='/ac'><li>AC</li></Link>
          <Link to='/fridge'><li>Fridge</li></Link>
          
          <Link to='/kitchen'><li>kitchen</li></Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
