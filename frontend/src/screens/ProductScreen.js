import React, { useState, useEffect } from 'react'
import { Link ,useNavigate,useParams} from 'react-router-dom'
import { useTranslation } from "react-i18next"
import { Row, Col, Image, ListGroup, Button, Card, Form,} from 'react-bootstrap'
import Rating from '../components/Rating/Rating'
import { Rating as ReactRating } from 'react-simple-star-rating'
import Loader from '../components/Loader/Loader'
import Message from '../components/Message/Message'
import { useDispatch,useSelector } from 'react-redux'
import { listProductDetails, createProductReview } from '../actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'


function ProductScreen() {
  const [qty, setQty] = useState(1)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const categoryList_ar = ['','برطمان زجاج','عبوه صفيح','عبوه تراي','براميل','جرادل','علب بلاستيك']
  const categoryList_en = ['','Glass Jar','Tinplate','Tray Packaging','Drums','Buckets','Plastic Package']
  const navigate = useNavigate();
  const { id } = useParams();
  const [t,i18n]=useTranslation();

  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.productDetails)
  const { loading, error, product } = productDetails

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const productReviewCreate = useSelector(state => state.productReviewCreate)
  const {
      loading: loadingProductReview,
      error: errorProductReview,
      success: successProductReview,
  } = productReviewCreate
  useEffect(()=>{
    if (successProductReview) {
        setRating(0)
        setComment('')
        dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
    }
    dispatch(listProductDetails(id))
  },[dispatch,id,successProductReview])


    const handleRating = (rate) => {
        setRating(rate)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createProductReview(
            id, {
            rating,
            comment
        }
        ))
    }
  return (
    <>
        { loading ?
            <Loader />
            : error 
                ? <Message variant='danger'>{error}</Message>
                :
                <div style={i18n.language == 'ar'?{direction:'rtl'}:{direction:'ltr'}}> 
                <nav aria-label="breadcrumb" className="mb-4">
                    <ol className="breadcrumb" style={{backgroundColor:'#ddd',padding:'10px 15px',marginBottom:'0px',borderRadius:'40px'}}>
                        <li className="breadcrumb-item "><Link to='/'><span><i className="fa-solid fa-house-chimney"></i></span>    {i18n.language == 'ar'?'الصفحه الرئيسيه':'Home'}</Link></li>
                        <li className="breadcrumb-item text-center" aria-current="page">/</li>
                        <li className="breadcrumb-item active " aria-current="page">{i18n.language == 'ar'?product.name_ar:product.name}</li>
                    </ol>
                </nav> 
                <Row>
                    <Col md={4} className="text-center">
                        <Image src={product.image} alt={product.name} fluid style={{maxHeight:"550px"}}/>
                    </Col>

                    <Col md={8}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h3>{i18n.language == 'ar'?product.name_ar:product.name}</h3>
                            </ListGroup.Item>

                            <ListGroup.Item style={{direction:'ltr'}}>
                                <Rating value={product.rating} text={`${product.numReviews}`} color={'#4e7726'}/>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <strong>{i18n.language == 'ar'?'المكونات :':'Ingredient'}</strong> {i18n.language == 'ar'?product.description_ar:product.description}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>{i18n.language == 'ar'?'الوزن الصافي :':'Package Weight :'}</strong> {product.package_weight} {i18n.language == 'ar'?'جرام':'g'}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>{i18n.language == 'ar'?'الوزن القائم :':'Gross Weight :'}</strong> {product.weight} {i18n.language == 'ar'?'جرام':'g'}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>{i18n.language == 'ar'?'عدد الكرتونه :':'Count of items :'}</strong> {product.countOfItemsPerBox}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>{i18n.language == 'ar'?'التصنيف :':'Category :'}</strong> {i18n.language == 'ar'?categoryList_ar[product.category]:categoryList_en[product.category]}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <div className="alert alert-dark mt-2" role="alert">
                            <h2>{i18n.language == 'ar'?'المراجعات':'Reviews'} ({product.reviews.length})</h2>
                        </div>
                        {product.reviews.length === 0 && <Message variant='warning'>{i18n.language == 'ar'?'لا توجد مراجعه':'No Reviews'}</Message>}

                        <ListGroup>
                            {product.reviews.map((review) => (
                                <ListGroup.Item key={review._id}>
                                    <div className='d-flex align-items-center'>
                                        <strong>{review.name}</strong>
                                        <Rating value={review.rating} color='#4e7726' />
                                    </div>
                                    <span>{review.createdAt.substring(0, 10)}</span>
                                    <p>{review.comment}</p>
                                </ListGroup.Item>
                            ))}

                            <ListGroup.Item>
                                <h4 className="alert alert-dark mt-2" role="alert">{i18n.language == 'ar'?'أضف مراجعه':'Write a review'}</h4>

                                {loadingProductReview && <Loader />}
                                {successProductReview && <Message variant='success'>Review Submitted</Message>}
                                {errorProductReview && <Message variant='danger'>{errorProductReview}</Message>}

                                {userInfo ? (
                                    <Form onSubmit={submitHandler}>
                                        <Form.Group controlId='rating'>
                                            <div className='d-flex align-items-center'>
                                                <Form.Label className='mb-0'>{i18n.language == 'ar'?'تقييمك :':'Rating :'}</Form.Label>
                                                <ReactRating onClick={handleRating} size={25} fillColor="#4e7726" rtl={i18n.language == 'ar'?true:false}></ReactRating>
                                            </div>
                                        </Form.Group>

                                        <Form.Group controlId='comment'>
                                            <Form.Label>{i18n.language == 'ar'?'مراجعتك :':'Review :'}</Form.Label>
                                            <Form.Control
                                                as='textarea'
                                                row='5'
                                                value={comment}
                                                onChange={(e) => setComment(e.target.value)}
                                            ></Form.Control>
                                        </Form.Group>

                                        <Button
                                            disabled={loadingProductReview}
                                            type='submit'
                                            className='btn btn-custom-color w-100 mt-3'
                                        >
                                            {i18n.language == 'ar'?'إرسال':'Submit'}
                                        </Button>

                                    </Form>
                                ) : (
                                    <>
                                        {i18n.language == 'ar'?
                                            <Message variant='warning'>ارجوك قم <Link to='/login'>بتسجيل الدخول </Link>اولا لكتابه مراجعتك </Message>
                                            :
                                            <Message variant='warning'>Please <Link to='/login'>login</Link> to write a review</Message>
                                        }
                                    </>
                                    )}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                </div>
        }
    </>
  )
}

export default ProductScreen
