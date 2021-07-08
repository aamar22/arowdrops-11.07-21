import React, {useState, useEffect} from 'react'
import filterSearch from '../utils/filterSearch'
import {getData} from '../utils/fetchData'
import {useRouter} from 'next/router'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';
// import OwlCarousel from 'react-owl-carousel';  
// import 'owl.carousel/dist/assets/owl.carousel.css';  
// import 'owl.carousel/dist/assets/owl.theme.default.css';  
// import OwlDemo from './owl' 

const Filter = ({state}) => {
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')
    const [category, setCategory] = useState('')

    const {categories} = state

    const router = useRouter()


    const handleCategory = (e) => {
        setCategory(e.target.value)
        filterSearch({router, category: e.target.value})
    }

    const handleSort = (e) => {
        setSort(e.target.value)
        filterSearch({router, sort: e.target.value})
    }

    useEffect(() => {
        filterSearch({router, search: search ? search.toLowerCase() : 'all'})
    },[search])

    return (
        <div className="input-group">
            {/* <div className="input-group-prepend col-md-2 px-0 mt-2">
                <select className="custom-select text-capitalize"
                value={category} onChange={handleCategory}>

                    <option value="all">All Products</option>

                    {
                        categories.map(item => (
                            <option key={item._id} value={item._id}>{item.name}</option>
                        ))
                    }
                </select>
            </div> */}

            {/* <form autoComplete="off" className="mt-2 col-md-8 px-0">
                <input type="text" className="form-control" list="title_product"
                value={search.toLowerCase()} onChange={e => setSearch(e.target.value)} />
            </form> */}

            {/* <div className="input-group-prepend col-md-2 px-0 mt-2">
                <select className="custom-select text-capitalize"
                value={sort} onChange={handleSort}>

                     <option value="-createdAt">Newest</option>
                     <option value="oldest">Oldest</option>
                     <option value="-sold">Best sales</option>
                     <option value="-price">Price: Hight-Low</option>
                     <option value="price">Price: Low-Hight</option>

                </select>
            </div> */}
            {/* <img className="home_image" src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1625149517_web.jpg" alt=""/> */}
            <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}><img className="home_image" src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1619272372_web.jpg" alt=""/></Slide>
          <Slide index={1}><img className="home_image" src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1625156215_web.jpg" alt=""/></Slide>
          <Slide index={2}><img className="home_image" src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1625149517_web.jpg" alt=""/></Slide>
        </Slider>
        <div className="but">
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext></div>
      </CarouselProvider>
      {/* <div class='container-fluid' >   
          <OwlCarousel items={3} margin={8} autoplay ={true} >  
        <div ><img  className="img" src= {'https://www.jiomart.com/images/cms/aw_rbslider/slides/1625149517_web.jpg'}/></div>  
           <div><img  className="img" src= {'https://www.jiomart.com/images/cms/aw_rbslider/slides/1625149517_web.jpg'}/></div>  
           <div><img  className="img" src= {'https://www.jiomart.com/images/cms/aw_rbslider/slides/1625156215_web.jpg'}/></div>  
           <div><img  className="img" src= {'assets/img/img3.jpg'}/></div>  
           <div><img className="img" src= {'assets/img/img5.jpg'}/></div>  
           <div><img className="img" src= {'assets/img/img6.jpg'}/></div>  
           <div><img className="img" src= {'assets/img/img7.jpg'}/></div>  

      </OwlCarousel>  
        </div> */}
        {/* <OwlDemo></OwlDemo>   */}

        </div>
    )
}

export default Filter
