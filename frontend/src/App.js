import {Container} from 'react-bootstrap';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
// common components
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// screes
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import AboutScreen from './screens/AboutScreen';
import GalleryPackagesScreen from './screens/GalleryPackagesScreen';
import GalleryMachinesScreen from './screens/GalleryMachinesScreen';
import GalleryFactoryScreen from './screens/GalleryFactoryScreen';

// translate ar and en 
import { useTranslation } from "react-i18next";
import { useEffect } from 'react';

function App() {
  const [t,i18n]=useTranslation();
  useEffect(()=>{
    document.title = t('html_title')
  },[t])
  return (
    <Router>
      <Header />
      <div className='whatsapp-fixed-icon'><a href="https://wa.me/201023096900" target="_blank"><i className="fa-brands fa-whatsapp"></i></a></div>
      <div className='messenger-fixed-icon'><a href="http://m.me/elforsanolive" target="_blank"><i className="fa-brands fa-facebook-messenger"></i></a></div>
      <main className='py-5'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen/>} exact />
            <Route path='/product/:id' element={<ProductScreen/>} />
            <Route path='/login' element={<LoginScreen/>} />
            <Route path='/register' element={<RegisterScreen/>} />
            <Route path='/about' element={<AboutScreen/>} />
            <Route path='/gallery/packages' element={<GalleryPackagesScreen/>} />
            <Route path='/gallery/machines' element={<GalleryMachinesScreen/>} />
            <Route path='/gallery/factory' element={<GalleryFactoryScreen/>} />
            <Route path='/admin/userlist' element={<UserListScreen/>} />
            <Route path='/admin/user/:id/edit' element={<UserEditScreen/>} />
            <Route path='/admin/productlist' element={<ProductListScreen/>} />
            <Route path='/admin/product/:id/edit' element={<ProductEditScreen/>} />

          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
