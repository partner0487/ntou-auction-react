"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import MediaCard from '@/components/MediaCard';
import axios from 'axios';
import Cookies from 'js-cookie';

const commodityAPI = "/api/v1/product/products";

export default function HomePage() {
  const [commodity, setcommodity] = React.useState([]);
  React.useEffect(() => {
    fetch(commodityAPI)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setcommodity(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  var len = commodity ? Object.keys(commodity).length : 0;

  return (
    <Box style={{ display: 'block' , marginTop: "60px" }}>
      <div>
        <Alert variant="outlined" severity="info" sx={{ mt: 2, mb: 5 }}>
          <AlertTitle>歡迎來到海大拍賣系統 👋</AlertTitle>
          您可以在本系統購買商品，也可以上架想賣出的商品。
        </Alert>
        <Grid container spacing={3} style={{ width: "100%" }}>
          <Grid xs={6} style={{ width: "100%" }}>
            <div style={{ display: 'flex', flexWrap: "wrap" }}>
              {commodity ? function () {
                let show = []
                for (let i = 0; i < len; i++) {
                  show.push(<MediaCard commodity={commodity[i]} />)
                }
                return show
              }() : <p>404</p>}
            </div>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
