import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, InputBase, IconButton } from '@mui/material';
import { NavigateBefore, NavigateNext, Search } from '@mui/icons-material';

export default function Slider() {
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
        <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 3 }}>
                <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', backgroundColor: '#0275d8', color: 'white' }}>
                    <InputBase
                        sx={{ ml: 1, flex: 1, color: 'inherit' }}
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'Search DishDash' }}
                    />
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
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
    );
}

function Item({ item }) {
    return (
        <Paper>
            <img src={item.imageUrl} alt={item.name} style={{ objectFit: "contain", width: '100%', opacity: "60%" }} />
        </Paper>
    );
}
