import React from 'react'
import { useTranslation } from "react-i18next";
import './Footer.css'
function Footer() {
  const [t,i18n]=useTranslation();
  return (
    <footer>
      <div className='container'>
        <div className='row g-3' style={i18n.language == 'ar'?{flexDirection:'row-reverse'}:{flexDirection:'row'}}>
          <div className='col-lg-4'>
            <div className='footer-aboutus' style={i18n.language == 'ar'?{direction:'rtl'}:{direction:'ltr'}}>
              <h3>{t('footer.about_us.title')}</h3>
              <p>{t('footer.about_us.content')}</p>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='footer-contactus' style={i18n.language == 'ar'?{direction:'rtl'}:{direction:'ltr'}}>
              <h3>{t('footer.contact_us.title')}</h3>
              <p><i className="fa-solid fa-location-dot"></i> {t('footer.contact_us.content')}</p>
              <div className='social-icons'>
                <a href="https://wa.me/201023096900" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
                <a href='mailto:saadelweshahy@gmail.com' target="_blank"><i className="fa-brands fa-google-plus-g"></i></a>
                <a href='tel:+201023096900' target="_blank"><i className="fa-solid fa-phone-volume"></i></a>
                <a href='http://m.me/elforsanolive' target="_blank"><i className="fa-brands fa-facebook-messenger"></i></a>
              </div>
            </div>
          </div>
          <div className='col-lg-4'> 
            <iframe src="https://maps.google.com/maps?q=An Nakhas, Zagazig, Ash Sharqia Governorate&t=&z=10&ie=UTF8&iwloc=&output=embed" width="100%" height="220px" style={{ border: 0 }}></iframe>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
