import React from "react";
import {Box , Stack} from "@chakra-ui/react";
// import Card from "./Card";
import axios from "axios";
import Plan from "./Plan";

const Home = () => {

   const checkoutHandler = async (amount) => {

      const { data: { key } } = await axios.get("http://localhost:4000/api/getkey");
      
   const { data: {order} } = await axios.post("http://localhost:4000/api/checkout", {
      amount
  })
 

  const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "sandeep",
      description: "Tutorial of RazorPay",
      image: "https://avatars.githubusercontent.com/u/25058652?v=4",
      order_id: order.id,
      callback_url: "http://localhost:4000/api/paymentverification",
      prefill: {
          name: "Gaurav Kumar",
          email: "sssad@exmaple.com",
          contact: "9999999999"
      },
      notes: {
          "address": "Razorpay Corporate Office"
      },
      theme: {
          "color": "#121212"
      }
  };
  const razor = new window.Razorpay(options);
  razor.open();
}
  
  
  
    return (

    <Box>
 
 <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column",'row']}>

    {/* <Card amount={5000} img={'https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png'} checkoutHandler={checkoutHandler}/> */}

    <Plan amount={3000}  checkoutHandler={checkoutHandler} />
 </Stack>

    </Box>
   
  )
}

export default Home