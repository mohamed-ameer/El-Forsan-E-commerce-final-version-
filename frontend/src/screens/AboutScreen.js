import React from 'react'
import { useTranslation } from "react-i18next"
import { Link,useNavigate} from 'react-router-dom'
import { Row, Col, Image,Card,Button} from 'react-bootstrap'
import ImageGallery from 'react-image-gallery'
import './AboutScreen.css'

function AboutScreen() {
    const [t,i18n]=useTranslation()
    const navigate = useNavigate()
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
        <>
        <nav aria-label="breadcrumb" className="mb-4" style={i18n.language == 'ar'?{direction:'rtl'}:{direction:'ltr'}}>
            <ol className="breadcrumb" style={{backgroundColor:'#ddd',padding:'10px 15px',marginBottom:'0px',borderRadius:'40px'}}>
                <li className="breadcrumb-item "><Link to='/'><span><i className="fa-solid fa-house-chimney"></i></span>    {i18n.language == 'ar'?'الصفحه الرئيسيه':'Home'}</Link></li>
                <li className="breadcrumb-item text-center" aria-current="page">/</li>
                <li className="breadcrumb-item active " aria-current="page">{i18n.language == 'ar'?'من نحن':'About Us'}</li>
            </ol>
        </nav> 
        <div className='about_us'>
            <div className='about_us_video'>
                <iframe width="100%" height="500" src="https://www.youtube.com/embed/qu9BR0IyWZI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className='about_us_section1'>
                <div className='about_us_title'>
                    <h2>{i18n.language == 'ar'?'من نحن':'ABOUT US'}</h2>
                </div>
                <div className='about_us_content shadow' style={i18n.language == 'ar'?{direction:'rtl'}:{direction:'ltr'}}>
                    <Row className='gy-4'>
                        <Col md={5} className="text-center">
                            <Image src="/images/futurefactory.jpeg" fluid style={{maxHeight:"400px"}}/>
                        </Col>
                        <Col md={7}>
                            <h2 className='about_us_content_title'>{i18n.language == 'ar'?'مصنع الفرسان لإنتاج وتعبئة المواد الغذائية':'El-Forsan Factory for the production and packaging of foodstuffs'}</h2>
                            <div className='about_us_content_text'>
                            {i18n.language == 'ar'?
                            <>
                                <p>تأسست في جمهورية مصر العربية 2012</p>
                                <p>تشتهر مصرنا الحبيبية منذ القدم بأنها أرض الخيرات و الموارد الطبيعية ومن وحي طبيعتنا بدأ مشروع تأسس مصنع الفرسان لإنتاج و تعبئة المواد الغذائية فأخذنا نسعى لتطوير وتحسين إنتاجها بأقصى الإمكانيات و تزويد من منتجاتنا أصنافاً جديدة وقابرنا على هدف واحد و هو تقديم منتج غذائى يمتلك الجوده و الطعم التي تتميز بها محاصيلنا في مصرنا الحبيبه ومن ربوع أراضينا الخضراء وبدأنا في تصنيعها وتعبئتها في عبوات مميزه و أشكال مختلفة معقمة على الطريقة الصحيحة و تصديرها لجميع دول العالم ونمتلك خبرة تعدت السنين في تحضير المنتجات الفاخرة.</p>
                                <p>ويبقي طموحنا ورسالتنا أن نعكس الصورة الصادقة و البراقة لمنتجاتنا الغذائية في كل مكان.</p>
                            </>
                            :
                            <>
                                <p>Founded in the Arab Republic of Egypt 2012</p>
                                <p>Our beloved Egypt has been known since ancient times as the land of good and natural resources Inspired by our nature, the project of El-Fursan Factory for the production and packaging of foodstuffs began, so we sought to develop and improve its production with the maximum capabilities and provide new varieties of our products. And we achieved one goal, which is to provide a food product that possesses the quality and taste that characterizes our crops in our beloved Egypt. And from the corners of our green lands, we began to manufacture and package them in distinctive packages and various sterile shapes in the correct way, and export them to all countries of the world. We have years of experience in preparing luxury products.</p>
                                <p>Our ambition and mission remains to reflect the bright and honest image of our food products everywhere.</p>
                            </>
                            }
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className='about_us_section2'>
                <div className='about_us_title'>
                    <h2>{i18n.language == 'ar'?'الكاتالوج':'CATALOG'}</h2>
                </div>
                <div className='about_us_section2_button' style={i18n.language == 'ar'?{direction:'rtl'}:{direction:'ltr'}}>
                    <a className='btn-custom-color' href='/images/test.pdf' target='_blank'>{i18n.language == 'ar'?'قم بتنزيل البروشور الخاص بالتصدير':'Download our brochure For Export'}</a>
                </div>
            </div>
            <div className='about_us_section3'>
                <div className='about_us_title'>
                    <h2>{i18n.language == 'ar'?'معرض الصور':'PHOTO GALLERY'}</h2>
                </div>
                <div className='' style={i18n.language == 'ar'?{direction:'rtl'}:{direction:'ltr'}}>
                <Row className='gy-4'>
                    <Col md={4} className="text-center">
                        <Card className="my-3 rounded shadow product-home-card">
                            <Link to={`/gallery/factory`}>
                                <Card.Img src="" style={{maxHeight:"250px"}}/>
                            </Link>
                            <Card.Body>
                            <Button
                                onClick={()=>navigate('/gallery/factory')}
                                className='btn btn-custom-color btn-lg w-100'
                                type='button'>
                                {i18n.language == 'ar'?'شاهد صور المصنع':'See factory photos'}
                            </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="text-center">
                        <Card className="my-3 rounded shadow product-home-card">
                            <Link to={`/gallery/machines`}>
                                <Card.Img src="" style={{maxHeight:"250px"}}/>
                            </Link>
                            <Card.Body>
                            <Button
                                onClick={()=>navigate('/gallery/machines')}
                                className='btn btn-custom-color btn-lg w-100'
                                type='button'>
                                {i18n.language == 'ar'?'شاهد صور المعدات':'See machines photos'}
                            </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="text-center">
                        <Card className="my-3 rounded shadow product-home-card">
                            <Link to={`/gallery/packages`}>
                                <Card.Img src="" style={{maxHeight:"250px"}}/>
                            </Link>
                            <Card.Body>
                            <Button
                                onClick={()=>navigate('/gallery/packages')}
                                className='btn btn-custom-color btn-lg w-100'
                                type='button'>
                                {i18n.language == 'ar'?'شاهد صور العبوات':'See packages photos'}
                            </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </div>
            </div>
            <div className='about_us_section4'>
                <div className='about_us_title'>
                    <h2>{i18n.language == 'ar'?'شهادات الجوده':'Quality certificates'}</h2>
                </div>
                <div className='about_us_certificates shadow mx-auto' style={i18n.language == 'ar'?{direction:'rtl'}:{direction:'ltr'}}>
                <ImageGallery items={images} />
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutScreen
