import React from 'react'
import ImageGallery from 'react-image-gallery'
import { Link} from 'react-router-dom'
import { useTranslation } from "react-i18next"

function GalleryFactoryScreen() {
    const [t,i18n]=useTranslation()
    const images = [
        {
          original: '/images/futurefactory.jpeg',
          thumbnail: '/images/futurefactory.jpeg',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ]
    return (
        <div>
          <nav aria-label="breadcrumb" className="mb-4" style={i18n.language == 'ar'?{direction:'rtl'}:{direction:'ltr'}}>
            <ol className="breadcrumb" style={{backgroundColor:'#ddd',padding:'10px 15px',marginBottom:'0px',borderRadius:'40px'}}>
                <li className="breadcrumb-item "><Link to='/'><span><i className="fa-solid fa-house-chimney"></i></span>    {i18n.language == 'ar'?'الصفحه الرئيسيه':'Home'}</Link></li>
                <li className="breadcrumb-item text-center" aria-current="page">/</li>
                <li className="breadcrumb-item " aria-current="page"><Link to='/about'>{i18n.language == 'ar'?'من نحن':'About Us'}</Link></li>
                <li className="breadcrumb-item text-center" aria-current="page">/</li>
                <li className="breadcrumb-item active " aria-current="page">{i18n.language == 'ar'?'صور المصنع':'Factory Photos'}</li>
            </ol>
          </nav>
            <ImageGallery items={images} />
        </div>
    )
}

export default GalleryFactoryScreen
