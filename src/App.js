import './App.css';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ConfirmProvider } from 'material-ui-confirm';
import { createTheme } from './theme';
import OrderList from './orders/order-list';
import OrderDetails from './orders/order-detail-main';
import NotFound from './404';
import WarehouseDetails from './warehouse/warehouse_details_main';
import { ProductDetails } from './products/product_details_main'

function App() {

  const pages = ["Order List", "Order Detail", "Warehouse Detail", "Product Details"]
  const [id, setId] = useState(0)

  const darkTheme = createTheme({
    mode: 'dark'
  })


  return (
    <ThemeProvider
      theme={darkTheme}
    >
      <Toaster position="top-center" />
      <CssBaseline />
      <ConfirmProvider>
        <>
          <div style={{ backgroundColor:"#383838", display: "flex", justifyContent: "space-evenly" }}>
            {pages.map((page, index) => (
              <p onClick={() => { setId(index) }}> {page + " = " + index + " \t"}</p>
            ))}
          </div>
          {id == 0 && <OrderList />}
          {id == 1 && <OrderDetails />}
          {id == 2 && <WarehouseDetails />}
          {id == 3 && <ProductDetails />}
          {id >= pages.length && <NotFound />}

        </>
      </ConfirmProvider>
    </ThemeProvider>
  );
}

export default App;
