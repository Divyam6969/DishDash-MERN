import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

import Carousel from 'react-material-ui-carousel';
import { Paper, InputBase, IconButton } from '@mui/material';
import { NavigateBefore, NavigateNext, Search } from '@mui/icons-material';

export default function Home() {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch('http://localhost:5000/api/foodData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
        imageUrl: "https://source.unsplash.com/random/900x300/?food",
    },
    {
        name: "Random Name #2",
        description: "Hello World!",
        imageUrl: "https://source.unsplash.com/random/900x300/?yummy",
    },
    {
        name: "Random Name #2",
        description: "Hello World!",
        imageUrl: "https://source.unsplash.com/random/900x300/?eating",
    },
    {
        name: "Random Name #2",
        description: "Hello World!",
        imageUrl: "https://source.unsplash.com/random/900x300/?tasty",
    },
    {
        name: "Random Name #2",
        description: "Hello World!",
        imageUrl: "https://source.unsplash.com/random/900x300/?cooking",
    },
];

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
      <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 3 }}>
                <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', backgroundColor: '#0275d8', color: 'white' }}>
                    <InputBase
                        sx={{ ml: 1, flex: 1, color: 'inherit' }}
                        placeholder="Search DishDash ;)"
                        inputProps={{ 'aria-label': 'Search' }}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <IconButton sx={{ p: '10px' }} aria-label="search">
                        <Search />
                    </IconButton>
                </Paper>
            </div>
            <Carousel
                style={{ height: "400px" }}
                autoPlay={true}
                interval={3000}
                PrevIcon={<NavigateBefore />}
                NextIcon={<NavigateNext />}
                indicatorContainerProps={{ style: { display: 'none' } }}
            >
                {items.map((item, i) => (
                    <Item key={i} item={item} />
                ))}
            </Carousel>
        </div>
      </div>
      <div className="container">
        {foodCat !== [] ? (
          foodCat.map((data) => {
            return (
              <div className="row mb-3">
                <div className="fs-3 m-3" key={data._id} >{data.CategoryName}</div>
                <hr />
                  {foodItem !== []
                    ? foodItem
                        .filter((item) => (item.CategoryName === data.CategoryName)&& item.name.toLowerCase().includes(search.toLowerCase()))
                        .map((filterItems) => {
                          return (
                            <div
                              className="col-12 col-md-6 col-lg-3"
                            

                              key={filterItems._id}
                            >
                              <Card
                                foodItems={filterItems}
                                options={filterItems.options[0]}
                              />
                            </div>
                          );
                        })
                    : <div>"No such item found"</div>}
                </div>
              
            );
          })
        ) : (
          <div>""""""""""""</div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

function Item({ item }) {
  return (
      <Paper>
          <img src={item.imageUrl} alt={item.name} style={{ objectFit: "contain", width: '100%', opacity: "60%" }} />
      </Paper>
  );
}
