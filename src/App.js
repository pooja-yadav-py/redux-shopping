import { useSelector } from 'react-redux';
import './App.css';
import Product from './components/Product';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {
  const productList = useSelector((state)=>state.products);
  console.log(productList)
  
  return (
    // <div className="products-container">
    //   {/* <h1>pp</h1> */}
    //   {productList.map(({id,title,rating,price,image}) =>{
    //     return <Product key={id} title={title} rating={rating.rate} price={price} imageurl={image}/>
    //   })}
    // </div>
    <>
      <Header/>
      <Outlet/>
    </>
  );
}

export default App;
