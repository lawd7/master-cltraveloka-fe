import Sliders from 'react-slick';
import { Carousel } from 'react-carousel-minimal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Link} from "react-router-dom";
import "./InfoRoom.css"
import Footer from './Footer';
import Nav from './Nav';
import Nhahang from '/traveloka/src/Component/Image/nhahang.png';
import Letan from '/traveloka/src/Component/Image/reception24.png';
import Dauxe from '/traveloka/src/Component/Image/dauxe.png';
import Mang from '/traveloka/src/Component/Image/wifi.png';
import Thangmay from '/traveloka/src/Component/Image/thangmay.png';
import Measure from '/traveloka/src/Component/Image/measure.png';
import WifiTienich from '/traveloka/src/Component/Image/wifitienichactive.png';
import AnuongTienichInct from '/traveloka/src/Component/Image/anuonginactive.png';
import Giuong from '/traveloka/src/Component/Image/giuong.png';
import Khach from '/traveloka/src/Component/Image/khach.png';
import Khonghutthuoc from '/traveloka/src/Component/Image/nosmoking.png';
import Chinhsachhuyphong from '/traveloka/src/Component/Image/chinhsachhuyphonginactive.png';
import Hoicham from '/traveloka/src/Component/Image/questionmark.png';
import Tietkiemactive from '/traveloka/src/Component/Image/tietkiemactive.png';
import Anhdieukiendacbiet from '/traveloka/src/Component/Image/dieukiendacbiet.png';
import { ReactComponent as ImgTopComment } from '/traveloka/src/Component/Image/imgtopcomment.svg';
import {ReactComponent as RatingCircle} from '/traveloka/src/Component/Image/ratingcircle.svg';
import React from 'react';


/*function here*/

const reviewimg = [
    {
      image: "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67810653-aa6142346de7035242014b8e43b1ca20.jpeg?_src=imagekit&tr=c-at_max,h-488,q-40,w-768",
      caption: ""
    },
    {
      image: "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67810653-1abe7d9132dd0182f620ae2b52eaa471.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
      
    },
    {
      image: "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67810653-cc423a6d6c38b2117600b55b0e1cd4ab.jpeg?_src=imagekit&tr=c-at_max,h-488,q-40,w-768",
      
    },
    {
      image: "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67810653-ce408ac1b2af7c221728288d569fba39.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
      
    },
    {
      image: "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67810653-a106a29fc7bbff4758b6c27da1aed9ad.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
      
    },
    {
      image: "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67810653-3b846395f5d8d376f21f3500b7d8b5c4.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
      
    },
    {
      image: "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67810653-7c5d78cc66956d30dfac159c5b5ee4d6.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
      
    },
    {
      image: "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67810653-cd564fa32e81963bab44677d7fe8cfd6.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
      
    },
    {
      image: "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67810653-06b59e629a8c022cd8fb786b2724567d.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
      
    }
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    
  }

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }

  const InfoRoom = () => {
  return (
    <div>
        <Nav/>
      <div style={{marginTop:'20px'}}></div>
      <div>
        <form className='slideanh'> 
          <div>
            <div className='tenkhachsaninfo'>
              <h3 style={{marginTop:'0px', marginBottom:'12px'}}>Da Lat Royal Palace</h3>
            </div>
            <div style={{display:'flex',height:'18px'}}>
              <div className="phanbietinfo">Kh??ch s???n</div>
              <div className="danhgiainfo">
                <h4 style={{marginTop:'5px'}}>????nh gi??: 3/5</h4>
              </div>
            </div>
            <div className="diachiinfo">
              <h4>49 H?? Huy T???p, Ph?????ng 3, ???? L???t, T???nh L??m ?????ng, Vi???t Nam, 66000</h4>
            </div>   
          </div>

          <div style={{maxWidth:'920px'}}>
          <Carousel
            data={reviewimg}
            time={5000}
            width="920px"
            height="450px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="110px"           
            style={{
              textAlign: "center",
              maxWidth: "920px",
              maxHeight: "500px",
              margin: "10px auto",
            }}
          />
          </div>

          <div className='giaphongvanutdatphong'>
            <div style={{marginTop:'15px'}}>
              <div>
                <h4 className='giaphongtu' style={{}}>Gi?? ph??ng m???i ????m t???</h4>
              </div>
              <div>
                <h4 className='giaphongtu' style={{fontSize:'25px',color: 'rgb(255, 94, 31)'}}>365.288 VND</h4>
              </div>
              <div>
                <a href="#phongrenhat" className='btndatngayuppep'>?????t ngay</a>
              </div>
            </div>
          </div>

          <div><hr></hr></div>
          
          {/*Cac comment noi bat*/}
          <div>
            <div style={{}}>
              <Sliders {...settings} style={{width:'920px', textAlign:'center', }}>
                <div>
                  <div className='formcomment'>
                    <div style={{lineClamp:'3'}}>
                      <div>
                        <h4 className='topcomment'>V??? tr?? trung t??m, xung quanh h??ng qu??n, ??n s??ng cafe r???t ti???n Ph??ng ???c s???ch, n?????c n??ng t???t. Nh??n vi??n ok Gi?? c??? ch???p nh???n ???????c T???m 8.7?? cho m???t Kh??ch s???n 2-3 sao</h4>
                      </div>
                      <div style={{display:'flex'}}>
                        <div><ImgTopComment className='imgTopcomment'></ImgTopComment></div>
                        <div><h4 className='tentopcomment'>Le P. L.</h4></div>
                      </div>
                    </div>
                  </div>  
                </div>

                <div>
                  <div className='formcomment'>
                    <div>
                      <div>
                        <h4 className='topcomment'>Nh??n vi??n r???t d??? th????ng v?? chu ????o.</h4>
                      </div>
                      <div style={{display:'flex'}}>
                        <div><ImgTopComment className='imgTopcomment'></ImgTopComment></div>
                        <div><h4 className='tentopcomment'>Nguyen Q. L. M.</h4></div>
                      </div>
                    </div>
                  </div> 
                </div>

                <div>
                  <div className='formcomment'>
                    <div>
                      <div style={{width:'350px',}}>
                        <h4 className='topcomment'>Kh??ch s???n m???i. M??nh ??? ph??ng VIP r???ng r??i. S???ch s???. N???i th???t to??n g??? nh??n x???n x??. Gi?? c??? l???i h???p l??. Ch??? d??? th????ng. Nhi???t t??nh th??n thi???n. M??nh ???? gi???i thi???u v??i b???n kh??ch s???n n??y. L???n sau ?????n ???? L???t nhat dinh s??? gh?? l???i chotto matte kodasai hoho lolo bobo lala mama fuckeryshit hed hohoho fucker mosad asdadwdw asdabfv asdasdwd  sdadadad weqweadS sdsafsdfzd.</h4>
                      </div>
                      <div style={{display:'flex'}}>
                        <div><ImgTopComment className='imgTopcomment'></ImgTopComment></div>
                        <div><h4 className='tentopcomment'>My L.</h4></div>
                      </div>
                    </div>
                  </div> 
                </div>
              </Sliders>
            </div>
          </div>
          
          <div style={{}}><hr style={{}}></hr></div>

          {/*Cac tien nghi chinh*/}
          <div>
            <div className='tiennghitong'>
              <h3 style={{fontWeight:'400'}}>Ti???n nghi kh??ch s???n</h3>
            </div>
            <div>
              <div className='tiennghihinhvachu'>
                <div className='tiennghidautien'>
                  <div><img src={Nhahang} alt="" style={{width:'50px',height:'50px'}}/></div>   
                  <div><h4 className='tentiennghi'>Nh?? h??ng</h4></div>
                </div>
                <div className='tiennghithutu'>
                  <div><img src={Letan} alt="" style={{width:'50px',height:'50px'}}/></div>
                  <div><h4 className='tentiennghi'>L??? t??n 24h</h4></div>
                </div>
                <div className='tiennghithutu'>
                  <div><img src={Dauxe} alt="" style={{width:'50px',height:'50px'}}/></div>
                  <div><h4 className='tentiennghi'>Ch??? ?????u xe</h4></div>
                </div>
                <div className='tiennghithutu'>
                  <div><img src={Mang} alt="" style={{width:'50px',height:'50px'}}/></div>
                  <div><h4 className='tentiennghi'>WiFi</h4></div>
                </div>
                <div className='tiennghithutu'>
                  <div><img src={Thangmay} alt="" style={{width:'50px',height:'50px'}}/></div>
                  <div><h4 className='tentiennghi'>Thang m??y</h4></div>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div style={{marginTop:'25px'}}></div>

        

        <div style={{marginTop:'15px'}}></div>
        {/*Khuc nay la cua thong tin ve phong khach san*/}

        <a name="phongrenhat"></a>
        <form className='thongtinphong'> {/*phong Standard*/}
            <div>
              <div>
                <h3 className='loaiphong'>Standard</h3>
              </div>

              <div style={{display:'flex'}}>
                <div style={{borderTopRightRadius:'10px'}}>
                  <form className='formanh'>
                    <div className='anhloaiphong'>   
                      <div><img src="https://ik.imagekit.io/tvlk/generic-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67810653-d84e17177f0d184ffb8d64976ab32637.jpeg?_src=imagekit&tr=c-at_max,h-144,q-40,w-287" className='anhloaiphonglon'/></div>
                      <div style={{display:'flex', width:'270px' }}>
                        <div><img src="https://ik.imagekit.io/tvlk/generic-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67810653-6692e0b6b29c1a59bf1d07cca6bf2d77.jpeg?_src=imagekit&tr=h-50,q-40,w-94" alt="" className='anhloaiphongnhotraicung' style={{marginLeft:'0px'}}/></div>
                        <div><img src="https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20049965-f238d79c1fa43d1412f6121c5bc9a8e0.jpeg?_src=imagekit&tr=h-50,q-40,w-94" alt="" className='anhloaiphongnho'/></div>
                        <div><img src="https://ik.imagekit.io/tvlk/generic-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67810653-2c83b49e0d242cdf954791cb4cc4f0d1.jpeg?_src=imagekit&tr=h-50,q-40,w-94" alt="" className='anhloaiphongnhophaicung'/></div>
                      </div>
                      <div>
                        <div style={{display:'flex'}}>
                          <div><img src={Measure} className='anhthuocdo'/></div>
                          <div>
                            <div><h4 className='dientichphong'>20.0 m<sup>2</sup></h4></div>
                          </div>
                        </div> 

                        <div style={{paddingLeft:'10px', marginTop:'-15px'}}>
                          <div className="tienichphong1">N?????c n??ng</div>
                        </div>

                        <div style={{paddingTop:'10px', paddingBottom:'10px'}}>
                          <button className='btnxemchitietphong'>Xem chi ti???t ph??ng</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div style={{flexDirection:'column', paddingLeft:'10px'}}></div>

                <div style={{flexDirection:'column'}}>
                  <div style={{}}> 
                    <form className='formthongtinphongngoai'>                
                      <div style={{}}>
                        <h4 className='tenloaiphong'>Standard Room</h4>
                      </div>
                      <div style={{display:'flex', textAlign:'left', }}>
                        <div style={{width:'220px', display:'flex'}}>
                          <img src={Giuong} className='anhthongtinchungphong' />
                          <h4 className='thongtinchungphong'>1 Gi?????ng ????i</h4>
                        </div>
                        <div style={{width:'180px', textAlign:'left', display:'flex'}}>
                          <img src={Khach} className='anhthongtinchungphong' />
                          <h4 className='thongtinchungphong'>2 kh??ch</h4>
                        </div>
                        <div style={{textAlign:'right', width:'170px'}}>
                          <h4 className='sophongtrong'>(4 ph??ng tr???ng)</h4>
                        </div>
                      </div>

                      <div><hr /></div>

                      <div>
                        <div style={{display:'flex'}}>
                          <div style={{display:'flex'}}>
                            <div className='tongcactienich1'>
                              <div className='divcactienich'>
                                <img src={AnuongTienichInct} className='anhcactienichformngoai'/>
                                <h4 className='cactienichformngoaiinactive'>Kh??ng g???m b???a s??ng</h4>
                              </div>
                              <div className='divcactienich'>
                                <img src={WifiTienich} className='anhcactienichformngoai'/>
                                <h4 className='cactienichformngoaiactive'>WiFi mi???n ph??</h4>
                              </div>
                              <div className='divcactienich'>
                                <img src={Khonghutthuoc} className='anhcactienichformngoai'/>
                                <h4 className='cactienichformngoaiactive'>Kh??ng h??t thu???c</h4>
                              </div>
                            </div>

                            <div className='tongcactienich2'>
                              <div className='divcactienich'>
                                <img src={Chinhsachhuyphong} alt="" className='anhcactienichformngoai'/>
                                <h4 className='cactienichformngoaiinactive'>Kh??ng ho??n ti???n</h4>
                              </div>
                              <div className='divcactienich'>
                                <img src={Chinhsachhuyphong} alt="" className='anhcactienichformngoai'/>
                                <h4 className='cactienichformngoaiinactive'>Kh??ng ??p d???ng ?????i l???ch</h4>
                              </div>
                              <div className='divcactienich'>
                                <img src={Hoicham} alt="" className='anhcactienichformngoai'/>
                                <div className='chinhsachhuydatphongformngoai'>Xem Ch??nh s??ch hu??? ph??ng
                                  <form className='tooltipchinhsachhuy'>?????t ph??ng n??y kh??ng ???????c ho??n ti???n</form>
                                </div>
                              </div>
                            </div>
                          </div>
                        
                          <div style={{textAlign:'right', width:'200px'}}>
                            <div><h4 className='giatiengocformngoai'>750.000\VND</h4></div>
                            <div><h3 className='giatiensaugiamgiaformngoai'>346.720 VND</h3></div>
                            <div><h4 className='trenphongtrendem'>/  ph??ng /  ????m</h4></div>
                            <div><h4 className='giacuoicungtextformngoai'>Gi?? cu???i c??ng</h4></div>
                            <div><h4 className='sodiemnhan'>Nh???n 127 ??i???m</h4></div>
                            <div><Link to="/Booking"><button className='btndatngaymoiphong'>?????t ngay</button></Link></div>
                          </div>
                        </div>
                      </div>

                      <div style={{paddingTop:'10px'}}><hr /></div>

                      <div>
                        <div style={{display:'flex'}}>
                          <div><img src={Tietkiemactive} className='anhtietkiem'/></div>
                          <div><h4 className='tietkiemactive'>Ti???t ki???m 25%!</h4></div>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div style={{marginBottom:'10px'}}></div>

                  <div>
                    <form className='formthongtinphongngoai'>                
                        <div style={{}}>
                          <h4 className='tenloaiphong'>Standard Room</h4>
                        </div>
                        <div style={{display:'flex', textAlign:'left', }}>
                          <div style={{width:'220px', display:'flex'}}>
                            <img src={Giuong} className='anhthongtinchungphong' />
                            <h4 className='thongtinchungphong'>1 Gi?????ng ????i</h4>
                          </div>
                          <div style={{width:'180px', textAlign:'left', display:'flex'}}>
                            <img src={Khach} className='anhthongtinchungphong' />
                            <h4 className='thongtinchungphong'>2 kh??ch</h4>
                          </div>
                          <div style={{textAlign:'right', width:'170px'}}>
                            <h4 className='sophongtrong'>(4 ph??ng tr???ng)</h4>
                          </div>
                        </div>

                        <div><hr /></div>

                        <div>
                          <div style={{display:'flex'}}>
                            <div style={{flexDirection:'column'}}>
                              <div style={{display:'flex'}}>
                                <div className='tongcactienich1'>
                                  <div className='divcactienich'>
                                    <img src={AnuongTienichInct} className='anhcactienichformngoai'/>
                                    <h4 className='cactienichformngoaiinactive'>Kh??ng g???m b???a s??ng</h4>
                                  </div>
                                  <div className='divcactienich'>
                                    <img src={WifiTienich} className='anhcactienichformngoai'/>
                                    <h4 className='cactienichformngoaiactive'>WiFi mi???n ph??</h4>
                                  </div>
                                  <div className='divcactienich'>
                                    <img src={Khonghutthuoc} className='anhcactienichformngoai'/>
                                    <h4 className='cactienichformngoaiactive'>Kh??ng h??t thu???c</h4>
                                  </div>
                                </div>

                                <div className='tongcactienich2'>
                                  <div className='divcactienich'>
                                    <img src={Chinhsachhuyphong} alt="" className='anhcactienichformngoai'/>
                                    <h4 className='cactienichformngoaiinactive'>H???y ph??ng c?? thu ph??</h4>
                                  </div> 
                                  <div className='divcactienich'>
                                    <img src={Hoicham} alt="" className='anhcactienichformngoai'/>
                                    <div className='chinhsachhuydatphongformngoai'>Xem Ch??nh s??ch hu??? ph??ng
                                      <form className='tooltipchinhsachhuy'>B???n s??? ph???i thanh to??n to??n b??? s??? ti???n cho k?? ngh??? t???i ????y n???u h???y ?????t ch??? n??y.</form>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div style={{textAlign:'left', paddingTop:'10px'}}>
                                <div style={{display:'flex'}}>
                                  <div>
                                    <img src={Anhdieukiendacbiet} alt="" className='anhdieukiendacbiet' />
                                  </div>
                                  <div className='textdieukiendacbiet'> Thanh to??n khi nh???n ph??ng. <br />
                                    ?????t kh??ng c???n thanh to??n tr?????c! Ti???t ki???m cho ?????n khi nh???n ph??ng!
                                    <form className='tooltip'>
                                      <h3 className='tooltiptitle'>??p d???ng thanh to??n khi nh???n ph??ng</h3>
                                      KH??NG C???N PH???I THANH TO??N NGAY KHI NH???N PH??NG! B???n c?? th??? ?????t ngay ph??ng c?? gi?? t???t nh???t h??m nay v?? thanh to??n sau b???ng ti???n m???t ho???c th??? khi nh???n ph??ng.
                                    </form>
                                  </div> 
                                </div>
                              </div>
                            </div>
                          
                            <div style={{textAlign:'right', width:'200px'}}>
                              <div><h4 className='giatiengocformngoai'>750.000\VND</h4></div>
                              <div><h3 className='giatiensaugiamgiaformngoai'>400.500 VND</h3></div>
                              <div><h4 className='trenphongtrendem'>/  ph??ng /  ????m</h4></div>
                              <div><h4 className='giacuoicungtextformngoai'>Gi?? cu???i c??ng</h4></div>
                              <div><h4 className='sodiemnhan'>Nh???n 134 ??i???m</h4></div>
                              <div><Link to="/Booking"><button className='btndatngaymoiphong'>?????t ngay</button></Link></div>
                            </div>
                          </div>
                        </div>

                        <div style={{paddingTop:'10px'}}><hr /></div>

                        <div>
                          <div style={{display:'flex'}}>
                            <div><img src={Tietkiemactive} className='anhtietkiem'/></div>
                            <div><h4 className='tietkiemactive'>Ti???t ki???m 25%!</h4></div>
                          </div>
                        </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        </form>

        <div style={{marginTop:'15px'}}></div>

        <form className='thongtinphong'> {/*phong Double Superior*/}
            <div>
              <div>
                <h3 className='loaiphong'>Superior Double</h3>
              </div>

              <div style={{display:'flex'}}>
                <div style={{borderTopRightRadius:'10px'}}>
                  <form className='formanh'>
                    <div className='anhloaiphong'>   
                      <div><img src="https://ik.imagekit.io/tvlk/generic-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67810653-d84e17177f0d184ffb8d64976ab32637.jpeg?_src=imagekit&tr=c-at_max,h-144,q-40,w-287" className='anhloaiphonglon'/></div>
                      <div style={{display:'flex', width:'270px' }}>
                        <div><img src="https://ik.imagekit.io/tvlk/generic-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67810653-6692e0b6b29c1a59bf1d07cca6bf2d77.jpeg?_src=imagekit&tr=h-50,q-40,w-94" alt="" className='anhloaiphongnhotraicung' style={{marginLeft:'0px'}}/></div>
                        <div><img src="https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20049965-f238d79c1fa43d1412f6121c5bc9a8e0.jpeg?_src=imagekit&tr=h-50,q-40,w-94" alt="" className='anhloaiphongnho'/></div>
                        <div><img src="https://ik.imagekit.io/tvlk/generic-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67810653-2c83b49e0d242cdf954791cb4cc4f0d1.jpeg?_src=imagekit&tr=h-50,q-40,w-94" alt="" className='anhloaiphongnhophaicung'/></div>
                      </div>
                      <div>
                        <div style={{display:'flex'}}>
                          <div><img src={Measure} className='anhthuocdo'/></div>
                          <div>
                            <div><h4 className='dientichphong'>25.0 m<sup>2</sup></h4></div>
                          </div>
                        </div> 

                        <div style={{paddingLeft:'10px', marginTop:'-15px'}}>
                          <div className="tienichphong1">N?????c n??ng</div>
                        </div>

                        <div style={{paddingTop:'10px', paddingBottom:'10px'}}>
                          <button className='btnxemchitietphong'>Xem chi ti???t ph??ng</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div style={{flexDirection:'column', paddingLeft:'10px'}}></div>

                <div style={{flexDirection:'column'}}>
                  <div style={{}}> 
                    <form className='formthongtinphongngoai'>                
                      <div style={{}}>
                        <h4 className='tenloaiphong'>Superior Double Room</h4>
                      </div>
                      <div style={{display:'flex', textAlign:'left', }}>
                        <div style={{width:'220px', display:'flex'}}>
                          <img src={Giuong} className='anhthongtinchungphong' />
                          <h4 className='thongtinchungphong'>1 Gi?????ng ????i</h4>
                        </div>
                        <div style={{width:'180px', textAlign:'left', display:'flex'}}>
                          <img src={Khach} className='anhthongtinchungphong' />
                          <h4 className='thongtinchungphong'>2 kh??ch</h4>
                        </div>
                        <div style={{textAlign:'right', width:'170px'}}>
                          <h4 className='sophongtrong'>(2 ph??ng tr???ng)</h4>
                        </div>
                      </div>

                      <div><hr /></div>

                      <div>
                        <div style={{display:'flex'}}>
                          <div style={{display:'flex'}}>
                            <div className='tongcactienich1'>
                              <div className='divcactienich'>
                                <img src={AnuongTienichInct} className='anhcactienichformngoai'/>
                                <h4 className='cactienichformngoaiinactive'>Kh??ng g???m b???a s??ng</h4>
                              </div>
                              <div className='divcactienich'>
                                <img src={WifiTienich} className='anhcactienichformngoai'/>
                                <h4 className='cactienichformngoaiactive'>WiFi mi???n ph??</h4>
                              </div>
                              <div className='divcactienich'>
                                <img src={Khonghutthuoc} className='anhcactienichformngoai'/>
                                <h4 className='cactienichformngoaiactive'>Kh??ng h??t thu???c</h4>
                              </div>
                            </div>

                            <div className='tongcactienich2'>
                              <div className='divcactienich'>
                                <img src={Chinhsachhuyphong} alt="" className='anhcactienichformngoai'/>
                                <h4 className='cactienichformngoaiinactive'>Kh??ng ho??n ti???n</h4>
                              </div>
                              <div className='divcactienich'>
                                <img src={Chinhsachhuyphong} alt="" className='anhcactienichformngoai'/>
                                <h4 className='cactienichformngoaiinactive'>Kh??ng ??p d???ng ?????i l???ch</h4>
                              </div>
                              <div className='divcactienich'>
                                <img src={Hoicham} alt="" className='anhcactienichformngoai'/>
                                <div className='chinhsachhuydatphongformngoai'>Xem Ch??nh s??ch hu??? ph??ng
                                  <form className='tooltipchinhsachhuy'>?????t ph??ng n??y kh??ng ???????c ho??n ti???n</form>
                                </div>
                              </div>
                            </div>
                          </div>
                        
                          <div style={{textAlign:'right', width:'200px'}}>
                            <div><h4 className='giatiengocformngoai'>890.000\VND</h4></div>
                            <div><h3 className='giatiensaugiamgiaformngoai'>652.338 VND</h3></div>
                            <div><h4 className='trenphongtrendem'>/  ph??ng /  ????m</h4></div>
                            <div><h4 className='giacuoicungtextformngoai'>Gi?? cu???i c??ng</h4></div>
                            <div><h4 className='sodiemnhan'>Nh???n 127 ??i???m</h4></div>
                            <div><Link to="/Booking"><button className='btndatngaymoiphong'>?????t ngay</button></Link></div>
                          </div>
                        </div>
                      </div>

                      <div style={{paddingTop:'10px'}}><hr /></div>

                      <div>
                        <div style={{display:'flex'}}>
                          <div><img src={Tietkiemactive} className='anhtietkiem'/></div>
                          <div><h4 className='tietkiemactive'>Ti???t ki???m 25%!</h4></div>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div style={{marginBottom:'10px'}}></div>

                  <div>
                    <form className='formthongtinphongngoai'>                
                        <div style={{}}>
                          <h4 className='tenloaiphong'>Superior Double Room</h4>
                        </div>
                        <div style={{display:'flex', textAlign:'left', }}>
                          <div style={{width:'220px', display:'flex'}}>
                            <img src={Giuong} className='anhthongtinchungphong' />
                            <h4 className='thongtinchungphong'>1 Gi?????ng ????i</h4>
                          </div>
                          <div style={{width:'180px', textAlign:'left', display:'flex'}}>
                            <img src={Khach} className='anhthongtinchungphong' />
                            <h4 className='thongtinchungphong'>2 kh??ch</h4>
                          </div>
                          <div style={{textAlign:'right', width:'170px'}}>
                            <h4 className='sophongtrong'>(2 ph??ng tr???ng)</h4>
                          </div>
                        </div>

                        <div><hr /></div>

                        <div>
                          <div style={{display:'flex'}}>
                            <div style={{flexDirection:'column'}}>
                              <div style={{display:'flex'}}>
                                <div className='tongcactienich1'>
                                  <div className='divcactienich'>
                                    <img src={AnuongTienichInct} className='anhcactienichformngoai'/>
                                    <h4 className='cactienichformngoaiinactive'>Kh??ng g???m b???a s??ng</h4>
                                  </div>
                                  <div className='divcactienich'>
                                    <img src={WifiTienich} className='anhcactienichformngoai'/>
                                    <h4 className='cactienichformngoaiactive'>WiFi mi???n ph??</h4>
                                  </div>
                                  <div className='divcactienich'>
                                    <img src={Khonghutthuoc} className='anhcactienichformngoai'/>
                                    <h4 className='cactienichformngoaiactive'>Kh??ng h??t thu???c</h4>
                                  </div>
                                </div>

                                <div className='tongcactienich2'>
                                  <div className='divcactienich'>
                                    <img src={Chinhsachhuyphong} alt="" className='anhcactienichformngoai'/>
                                    <h4 className='cactienichformngoaiinactive'>H???y ph??ng c?? thu ph??</h4>
                                  </div> 
                                  <div className='divcactienich'>
                                    <img src={Hoicham} alt="" className='anhcactienichformngoai'/>
                                    <div className='chinhsachhuydatphongformngoai'>Xem Ch??nh s??ch hu??? ph??ng
                                      <form className='tooltipchinhsachhuy'>B???n s??? ph???i thanh to??n to??n b??? s??? ti???n cho k?? ngh??? t???i ????y n???u h???y ?????t ch??? n??y.</form>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div style={{textAlign:'left', paddingTop:'10px'}}>
                                <div style={{display:'flex'}}>
                                  <div>
                                    <img src={Anhdieukiendacbiet} alt="" className='anhdieukiendacbiet' />
                                  </div>
                                  <div className='textdieukiendacbiet'> Thanh to??n khi nh???n ph??ng. <br />
                                    ?????t kh??ng c???n thanh to??n tr?????c! Ti???t ki???m cho ?????n khi nh???n ph??ng!
                                    <form className='tooltip'>
                                      <h3 className='tooltiptitle'>??p d???ng thanh to??n khi nh???n ph??ng</h3>
                                      KH??NG C???N PH???I THANH TO??N NGAY KHI NH???N PH??NG! B???n c?? th??? ?????t ngay ph??ng c?? gi?? t???t nh???t h??m nay v?? thanh to??n sau b???ng ti???n m???t ho???c th??? khi nh???n ph??ng.
                                    </form>
                                  </div> 
                                </div>
                              </div>
                            </div>
                          
                            <div style={{textAlign:'right', width:'200px'}}>
                              <div><h4 className='giatiengocformngoai'>890.000\VND</h4></div>
                              <div><h3 className='giatiensaugiamgiaformngoai'>802.000 VND</h3></div>
                              <div><h4 className='trenphongtrendem'>/  ph??ng /  ????m</h4></div>
                              <div><h4 className='giacuoicungtextformngoai'>Gi?? cu???i c??ng</h4></div>
                              <div><h4 className='sodiemnhan'>Nh???n 127 ??i???m</h4></div>
                              <div><Link to="/Booking"><button className='btndatngaymoiphong'>?????t ngay</button></Link></div>
                            </div>
                          </div>
                        </div>

                        <div style={{paddingTop:'10px'}}><hr /></div>

                        <div>
                          <div style={{display:'flex'}}>
                            <div><img src={Tietkiemactive} className='anhtietkiem'/></div>
                            <div><h4 className='tietkiemactive'>Ti???t ki???m 25%!</h4></div>
                          </div>
                        </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        </form>
        
        <div style={{marginTop:'15px'}}></div>

        <form className='thongtinphong'> {/*phong Suite*/}
            <div>
              <div>
                <h3 className='loaiphong'>Suite</h3>
              </div>

              <div style={{display:'flex'}}>
                <div style={{borderTopRightRadius:'10px'}}>
                  <form className='formanh'>
                    <div className='anhloaiphong'>   
                      <div><img src="https://ik.imagekit.io/tvlk/generic-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67810653-a177a312d63b4775ede3b990f1da116d.jpeg?_src=imagekit&tr=c-at_max,h-144,q-40,w-287" className='anhloaiphonglon'/></div>
                      <div style={{display:'flex', width:'270px' }}>
                        <div><img src="https://ik.imagekit.io/tvlk/generic-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67810653-ad88eec3e8cf4673c2afa75d1f3670c5.jpeg?_src=imagekit&tr=h-50,q-40,w-94" alt="" className='anhloaiphongnhotraicung' style={{marginLeft:'0px'}}/></div>
                        <div><img src="https://ik.imagekit.io/tvlk/generic-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67810653-857dda4830000f63bfce1eb805ce812d.jpeg?_src=imagekit&tr=h-50,q-40,w-94" alt="" className='anhloaiphongnho'/></div>
                        <div><img src="https://ik.imagekit.io/tvlk/generic-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67810653-4d58adf430b7453cec889e89f9586ec4.jpeg?_src=imagekit&tr=h-50,q-40,w-94" alt="" className='anhloaiphongnhophaicung'/></div>
                      </div>
                      <div>
                        <div style={{display:'flex'}}>
                          <div><img src={Measure} className='anhthuocdo'/></div>
                          <div>
                            <div><h4 className='dientichphong'>25.0 m<sup>2</sup></h4></div>
                          </div>
                        </div> 

                        <div style={{paddingLeft:'10px', marginTop:'-15px'}}>
                          <div className="tienichphong1">N?????c n??ng</div>
                        </div>

                        <div style={{paddingTop:'10px', paddingBottom:'10px'}}>
                          <button className='btnxemchitietphong'>Xem chi ti???t ph??ng</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div style={{flexDirection:'column', paddingLeft:'10px'}}></div>

                <div style={{flexDirection:'column'}}>
                  <div style={{}}> 
                    <form className='formthongtinphongngoai'>                
                      <div style={{}}>
                        <h4 className='tenloaiphong'>Suite Room</h4>
                      </div>
                      <div style={{display:'flex', textAlign:'left', }}>
                        <div style={{width:'220px', display:'flex'}}>
                          <img src={Giuong} className='anhthongtinchungphong' />
                          <h4 className='thongtinchungphong'>1 Gi?????ng ????i</h4>
                        </div>
                        <div style={{width:'180px', textAlign:'left', display:'flex'}}>
                          <img src={Khach} className='anhthongtinchungphong' />
                          <h4 className='thongtinchungphong'>2 kh??ch</h4>
                        </div>
                        <div style={{textAlign:'right', width:'170px'}}>
                          <h4 className='sophongtrong'>(2 ph??ng tr???ng)</h4>
                        </div>
                      </div>

                      <div><hr /></div>

                      <div>
                        <div style={{display:'flex'}}>
                          <div style={{display:'flex'}}>
                            <div className='tongcactienich1'>
                              <div className='divcactienich'>
                                <img src={AnuongTienichInct} className='anhcactienichformngoai'/>
                                <h4 className='cactienichformngoaiinactive'>Kh??ng g???m b???a s??ng</h4>
                              </div>
                              <div className='divcactienich'>
                                <img src={WifiTienich} className='anhcactienichformngoai'/>
                                <h4 className='cactienichformngoaiactive'>WiFi mi???n ph??</h4>
                              </div>
                              <div className='divcactienich'>
                                <img src={Khonghutthuoc} className='anhcactienichformngoai'/>
                                <h4 className='cactienichformngoaiactive'>Kh??ng h??t thu???c</h4>
                              </div>
                            </div>

                            <div className='tongcactienich2'>
                              <div className='divcactienich'>
                                <img src={Chinhsachhuyphong} alt="" className='anhcactienichformngoai'/>
                                <h4 className='cactienichformngoaiinactive'>Kh??ng ho??n ti???n</h4>
                              </div>
                              <div className='divcactienich'>
                                <img src={Chinhsachhuyphong} alt="" className='anhcactienichformngoai'/>
                                <h4 className='cactienichformngoaiinactive'>Kh??ng ??p d???ng ?????i l???ch</h4>
                              </div>
                              <div className='divcactienich'>
                                <img src={Hoicham} alt="" className='anhcactienichformngoai'/>
                                <div className='chinhsachhuydatphongformngoai'>Xem Ch??nh s??ch hu??? ph??ng
                                  <form className='tooltipchinhsachhuy'>?????t ph??ng n??y kh??ng ???????c ho??n ti???n</form>
                                </div>
                              </div>
                            </div>
                          </div>
                        
                          <div style={{textAlign:'right', width:'200px'}}>
                            <div><h4 className='giatiengocformngoai'>1.530.000\VND</h4></div>
                            <div><h3 className='giatiensaugiamgiaformngoai'>803.633 VND</h3></div>
                            <div><h4 className='trenphongtrendem'>/  ph??ng /  ????m</h4></div>
                            <div><h4 className='giacuoicungtextformngoai'>Gi?? cu???i c??ng</h4></div>
                            <div><h4 className='sodiemnhan'>Nh???n 127 ??i???m</h4></div>
                            <div><Link to="/Booking"><button className='btndatngaymoiphong'>?????t ngay</button></Link></div>
                          </div>
                        </div>
                      </div>

                      <div style={{paddingTop:'10px'}}><hr /></div>

                      <div>
                        <div style={{display:'flex'}}>
                          <div><img src={Tietkiemactive} className='anhtietkiem'/></div>
                          <div><h4 className='tietkiemactive'>Ti???t ki???m 25%!</h4></div>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div style={{marginBottom:'10px'}}></div>

                  <div>
                    <form className='formthongtinphongngoai'>                
                        <div style={{}}>
                          <h4 className='tenloaiphong'>Suite Room</h4>
                        </div>
                        <div style={{display:'flex', textAlign:'left', }}>
                          <div style={{width:'220px', display:'flex'}}>
                            <img src={Giuong} className='anhthongtinchungphong' />
                            <h4 className='thongtinchungphong'>1 Gi?????ng ????i</h4>
                          </div>
                          <div style={{width:'180px', textAlign:'left', display:'flex'}}>
                            <img src={Khach} className='anhthongtinchungphong' />
                            <h4 className='thongtinchungphong'>2 kh??ch</h4>
                          </div>
                          <div style={{textAlign:'right', width:'170px'}}>
                            <h4 className='sophongtrong'>(2 ph??ng tr???ng)</h4>
                          </div>
                        </div>

                        <div><hr /></div>

                        <div>
                          <div style={{display:'flex'}}>
                            <div style={{flexDirection:'column'}}>
                              <div style={{display:'flex'}}>
                                <div className='tongcactienich1'>
                                  <div className='divcactienich'>
                                    <img src={AnuongTienichInct} className='anhcactienichformngoai'/>
                                    <h4 className='cactienichformngoaiinactive'>Kh??ng g???m b???a s??ng</h4>
                                  </div>
                                  <div className='divcactienich'>
                                    <img src={WifiTienich} className='anhcactienichformngoai'/>
                                    <h4 className='cactienichformngoaiactive'>WiFi mi???n ph??</h4>
                                  </div>
                                  <div className='divcactienich'>
                                    <img src={Khonghutthuoc} className='anhcactienichformngoai'/>
                                    <h4 className='cactienichformngoaiactive'>Kh??ng h??t thu???c</h4>
                                  </div>
                                </div>

                                <div className='tongcactienich2'>
                                  <div className='divcactienich'>
                                    <img src={Chinhsachhuyphong} alt="" className='anhcactienichformngoai'/>
                                    <h4 className='cactienichformngoaiinactive'>H???y ph??ng c?? thu ph??</h4>
                                  </div> 
                                  <div className='divcactienich'>
                                    <img src={Hoicham} alt="" className='anhcactienichformngoai'/>
                                    <div className='chinhsachhuydatphongformngoai'>Xem Ch??nh s??ch hu??? ph??ng
                                      <form className='tooltipchinhsachhuy'>B???n s??? ph???i thanh to??n to??n b??? s??? ti???n cho k?? ngh??? t???i ????y n???u h???y ?????t ch??? n??y.</form>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div style={{textAlign:'left', paddingTop:'10px'}}>
                                <div style={{display:'flex'}}>
                                  <div>
                                    <img src={Anhdieukiendacbiet} alt="" className='anhdieukiendacbiet' />
                                  </div>
                                  <div className='textdieukiendacbiet'> Thanh to??n khi nh???n ph??ng. <br />
                                    ?????t kh??ng c???n thanh to??n tr?????c! Ti???t ki???m cho ?????n khi nh???n ph??ng!
                                    <form className='tooltip'>
                                      <h3 className='tooltiptitle'>??p d???ng thanh to??n khi nh???n ph??ng</h3>
                                      KH??NG C???N PH???I THANH TO??N NGAY KHI NH???N PH??NG! B???n c?? th??? ?????t ngay ph??ng c?? gi?? t???t nh???t h??m nay v?? thanh to??n sau b???ng ti???n m???t ho???c th??? khi nh???n ph??ng.
                                    </form>
                                  </div> 
                                </div>
                              </div>
                            </div>
                          
                            <div style={{textAlign:'right', width:'200px'}}>
                              <div><h4 className='giatiengocformngoai'>1.530.000\VND</h4></div>
                              <div><h3 className='giatiensaugiamgiaformngoai'>841.500 VND</h3></div>
                              <div><h4 className='trenphongtrendem'>/  ph??ng /  ????m</h4></div>
                              <div><h4 className='giacuoicungtextformngoai'>Gi?? cu???i c??ng</h4></div>
                              <div><h4 className='sodiemnhan'>Nh???n 127 ??i???m</h4></div>
                              <div><Link to="/Booking"><button className='btndatngaymoiphong'>?????t ngay</button></Link></div>
                            </div>
                          </div>
                        </div>

                        <div style={{paddingTop:'10px'}}><hr /></div>

                        <div>
                          <div style={{display:'flex'}}>
                            <div><img src={Tietkiemactive} className='anhtietkiem'/></div>
                            <div><h4 className='tietkiemactive'>Ti???t ki???m 25%!</h4></div>
                          </div>
                        </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        </form>

        <div style={{marginTop:'15px'}}></div>

        <form className='thongtinphong'> {/*phong Deluxe Family*/}
            <div>
              <div>
                <h3 className='loaiphong'>Deluxe Family</h3>
              </div>

              <div style={{display:'flex'}}>
                <div style={{borderTopRightRadius:'10px'}}>
                  <form className='formanh'>
                    <div className='anhloaiphong'>   
                      <div><img src="https://ik.imagekit.io/tvlk/generic-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67810653-c39568f16f40c2dca06a613b87958413.jpeg?_src=imagekit&tr=c-at_max,h-144,q-40,w-287" className='anhloaiphonglon'/></div>
                      <div style={{display:'flex', width:'270px' }}>
                        <div><img src="https://ik.imagekit.io/tvlk/generic-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67810653-b6d54469be1fb9d9b3950cdfc37c4c95.jpeg?_src=imagekit&tr=h-50,q-40,w-94" alt="" className='anhloaiphongnhotraicung' style={{marginLeft:'0px'}}/></div>
                        <div><img src="https://ik.imagekit.io/tvlk/generic-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67810653-006fafbeb0a782686288b02b295a97ac.jpeg?_src=imagekit&tr=h-50,q-40,w-94" alt="" className='anhloaiphongnho'/></div>
                        <div><img src="https://ik.imagekit.io/tvlk/generic-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67810653-dcaa2d7035827358e49abea15b50a443.jpeg?_src=imagekit&tr=h-50,q-40,w-94" alt="" className='anhloaiphongnhophaicung'/></div>
                      </div>
                      <div>
                        <div style={{display:'flex'}}>
                          <div><img src={Measure} className='anhthuocdo'/></div>
                          <div>
                            <div><h4 className='dientichphong'>25.0 m<sup>2</sup></h4></div>
                          </div>
                        </div> 

                        <div style={{paddingLeft:'10px', marginTop:'-15px'}}>
                          <div className="tienichphong1">N?????c n??ng</div>
                        </div>

                        <div style={{paddingTop:'10px', paddingBottom:'10px'}}>
                          <button className='btnxemchitietphong'>Xem chi ti???t ph??ng</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div style={{flexDirection:'column', paddingLeft:'10px'}}></div>

                <div style={{flexDirection:'column'}}>
                  <div style={{}}> 
                    <form className='formthongtinphongngoai'>                
                      <div style={{}}>
                        <h4 className='tenloaiphong'>Deluxe Family Room</h4>
                      </div>
                      <div style={{display:'flex', textAlign:'left', }}>
                        <div style={{width:'220px', display:'flex'}}>
                          <img src={Giuong} className='anhthongtinchungphong' />
                          <h4 className='thongtinchungphong'>2 Gi?????ng ????i</h4>
                        </div>
                        <div style={{width:'180px', textAlign:'left', display:'flex'}}>
                          <img src={Khach} className='anhthongtinchungphong' />
                          <h4 className='thongtinchungphong'>4 kh??ch</h4>
                        </div>
                        <div style={{textAlign:'right', width:'170px'}}>
                          <h4 className='sophongtrong'>(1 ph??ng tr???ng)</h4>
                        </div>
                      </div>

                      <div><hr /></div>

                      <div>
                        <div style={{display:'flex'}}>
                          <div style={{display:'flex'}}>
                            <div className='tongcactienich1'>
                              <div className='divcactienich'>
                                <img src={AnuongTienichInct} className='anhcactienichformngoai'/>
                                <h4 className='cactienichformngoaiinactive'>Kh??ng g???m b???a s??ng</h4>
                              </div>
                              <div className='divcactienich'>
                                <img src={WifiTienich} className='anhcactienichformngoai'/>
                                <h4 className='cactienichformngoaiactive'>WiFi mi???n ph??</h4>
                              </div>
                              <div className='divcactienich'>
                                <img src={Khonghutthuoc} className='anhcactienichformngoai'/>
                                <h4 className='cactienichformngoaiactive'>Kh??ng h??t thu???c</h4>
                              </div>
                            </div>

                            <div className='tongcactienich2'>
                              <div className='divcactienich'>
                                <img src={Chinhsachhuyphong} alt="" className='anhcactienichformngoai'/>
                                <h4 className='cactienichformngoaiinactive'>Kh??ng ho??n ti???n</h4>
                              </div>
                              <div className='divcactienich'>
                                <img src={Chinhsachhuyphong} alt="" className='anhcactienichformngoai'/>
                                <h4 className='cactienichformngoaiinactive'>Kh??ng ??p d???ng ?????i l???ch</h4>
                              </div>
                              <div className='divcactienich'>
                                <img src={Hoicham} alt="" className='anhcactienichformngoai'/>
                                <div className='chinhsachhuydatphongformngoai'>Xem Ch??nh s??ch hu??? ph??ng
                                  <form className='tooltipchinhsachhuy'>?????t ph??ng n??y kh??ng ???????c ho??n ti???n</form>
                                </div>
                              </div>
                            </div>
                          </div>
                        
                          <div style={{textAlign:'right', width:'200px'}}>
                            <div><h4 className='giatiengocformngoai'>1.870.000\VND</h4></div>
                            <div><h3 className='giatiensaugiamgiaformngoai'>982.218 VND</h3></div>
                            <div><h4 className='trenphongtrendem'>/  ph??ng /  ????m</h4></div>
                            <div><h4 className='giacuoicungtextformngoai'>Gi?? cu???i c??ng</h4></div>
                            <div><h4 className='sodiemnhan'>Nh???n 227 ??i???m</h4></div>
                            <div><Link to="/Booking"><button className='btndatngaymoiphong'>?????t ngay</button></Link></div>
                          </div>
                        </div>
                      </div>

                      <div style={{paddingTop:'10px'}}><hr /></div>

                      <div>
                        <div style={{display:'flex'}}>
                          <div><img src={Tietkiemactive} className='anhtietkiem'/></div>
                          <div><h4 className='tietkiemactive'>Ti???t ki???m 25%!</h4></div>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div style={{marginBottom:'10px'}}></div>

                  <div>
                    <form className='formthongtinphongngoai'>                
                        <div style={{}}>
                          <h4 className='tenloaiphong'>Deluxe Family Room</h4>
                        </div>
                        <div style={{display:'flex', textAlign:'left', }}>
                          <div style={{width:'220px', display:'flex'}}>
                            <img src={Giuong} className='anhthongtinchungphong' />
                            <h4 className='thongtinchungphong'>2 Gi?????ng ????i</h4>
                          </div>
                          <div style={{width:'180px', textAlign:'left', display:'flex'}}>
                            <img src={Khach} className='anhthongtinchungphong' />
                            <h4 className='thongtinchungphong'>4 kh??ch</h4>
                          </div>
                          <div style={{textAlign:'right', width:'170px'}}>
                            <h4 className='sophongtrong'>(1 ph??ng tr???ng)</h4>
                          </div>
                        </div>

                        <div><hr /></div>

                        <div>
                          <div style={{display:'flex'}}>
                            <div style={{flexDirection:'column'}}>
                              <div style={{display:'flex'}}>
                                <div className='tongcactienich1'>
                                  <div className='divcactienich'>
                                    <img src={AnuongTienichInct} className='anhcactienichformngoai'/>
                                    <h4 className='cactienichformngoaiinactive'>Kh??ng g???m b???a s??ng</h4>
                                  </div>
                                  <div className='divcactienich'>
                                    <img src={WifiTienich} className='anhcactienichformngoai'/>
                                    <h4 className='cactienichformngoaiactive'>WiFi mi???n ph??</h4>
                                  </div>
                                  <div className='divcactienich'>
                                    <img src={Khonghutthuoc} className='anhcactienichformngoai'/>
                                    <h4 className='cactienichformngoaiactive'>Kh??ng h??t thu???c</h4>
                                  </div>
                                </div>

                                <div className='tongcactienich2'>
                                  <div className='divcactienich'>
                                    <img src={Chinhsachhuyphong} alt="" className='anhcactienichformngoai'/>
                                    <h4 className='cactienichformngoaiinactive'>H???y ph??ng c?? thu ph??</h4>
                                  </div> 
                                  <div className='divcactienich'>
                                    <img src={Hoicham} alt="" className='anhcactienichformngoai'/>
                                    <div className='chinhsachhuydatphongformngoai'>Xem Ch??nh s??ch hu??? ph??ng
                                      <form className='tooltipchinhsachhuy'>B???n s??? ph???i thanh to??n to??n b??? s??? ti???n cho k?? ngh??? t???i ????y n???u h???y ?????t ch??? n??y.</form>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div style={{textAlign:'left', paddingTop:'10px'}}>
                                <div style={{display:'flex'}}>
                                  <div>
                                    <img src={Anhdieukiendacbiet} alt="" className='anhdieukiendacbiet' />
                                  </div>
                                  <div className='textdieukiendacbiet'> Thanh to??n khi nh???n ph??ng. <br />
                                    ?????t kh??ng c???n thanh to??n tr?????c! Ti???t ki???m cho ?????n khi nh???n ph??ng!
                                    <form className='tooltip'>
                                      <h3 className='tooltiptitle'>??p d???ng thanh to??n khi nh???n ph??ng</h3>
                                      KH??NG C???N PH???I THANH TO??N NGAY KHI NH???N PH??NG! B???n c?? th??? ?????t ngay ph??ng c?? gi?? t???t nh???t h??m nay v?? thanh to??n sau b???ng ti???n m???t ho???c th??? khi nh???n ph??ng.
                                    </form>
                                  </div> 
                                </div>
                              </div>
                            </div>
                          
                            <div style={{textAlign:'right', width:'200px'}}>
                              <div><h4 className='giatiengocformngoai'>1.870.000\VND</h4></div>
                              <div><h3 className='giatiensaugiamgiaformngoai'>1.028.500 VND</h3></div>
                              <div><h4 className='trenphongtrendem'>/  ph??ng /  ????m</h4></div>
                              <div><h4 className='giacuoicungtextformngoai'>Gi?? cu???i c??ng</h4></div>
                              <div><h4 className='sodiemnhan'>Nh???n 127 ??i???m</h4></div>
                              <div><Link to="/Booking"><button className='btndatngaymoiphong'>?????t ngay</button></Link></div>
                            </div>
                          </div>
                        </div>

                        <div style={{paddingTop:'10px'}}><hr /></div>

                        <div>
                          <div style={{display:'flex'}}>
                            <div><img src={Tietkiemactive} className='anhtietkiem'/></div>
                            <div><h4 className='tietkiemactive'>Ti???t ki???m 25%!</h4></div>
                          </div>
                        </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        </form>
        
        
        <div style={{marginBottom:'10px', marginTop:'10px'}}><hr></hr></div>

        <div> {/*Div nay la phan danh gia khach san*/}
          <form className="formdanhgiakhachsan">
            <div><h3 className='titlediemdanhgia'>??i???m ????nh gi??</h3></div>
            <div >
              <div style={{display:'flex'}}>
                <div className='phandiemdanhgiatheohinhanh'>
                  <span className='ratingcircle'>3/5</span>
                  <div><h2 className='textrating'>????nh gi??</h2></div>
                </div>

                <div style={{paddingLeft:'40px'}}>
                  <div className='chisodanhgia'>
                    <div><h4 className='titledohailong'>Tuy???t v???i</h4></div>

                    <div className='thanhdanhgia'>
                      <div className='thanhdanhgiatheoso'>
                      </div>
                    </div>

                    <div><h4 className='soluongnguoidanhgia'>85</h4></div>
                  </div>
                  <div className='chisodanhgia'>
                    <div><h4 className='titledohailong'>R???t t???t</h4></div>

                    <div className='thanhdanhgia'>
                      <div className='thanhdanhgiatheoso'>
                      </div>
                    </div>
                    
                    <div><h4 className='soluongnguoidanhgia'>85</h4></div>
                  </div>
                  <div className='chisodanhgia'>
                    <div><h4 className='titledohailong'>H??i l??ng</h4></div>

                    <div className='thanhdanhgia'>
                      <div className='thanhdanhgiatheoso'>
                      </div>
                    </div>
                    
                    <div><h4 className='soluongnguoidanhgia'>85</h4></div>
                  </div>
                  <div className='chisodanhgia'>
                    <div><h4 className='titledohailong'>Trung b??nh</h4></div>

                    <div className='thanhdanhgia'>
                      <div className='thanhdanhgiatheoso'>
                      </div>
                    </div>
                    
                    <div><h4 className='soluongnguoidanhgia'>85</h4></div>
                  </div>
                  <div className='chisodanhgia'>
                    <div><h4 className='titledohailong'>K??m</h4></div>

                    <div className='thanhdanhgia'>
                      <div className='thanhdanhgiatheoso'>
                      </div>
                    </div>
                    
                    <div><h4 className='soluongnguoidanhgia'>85</h4></div>
                  </div>
                </div>
                
                <div style={{paddingLeft:'60px'}}>
                  <div className='chisodanhgiadactinh'>
                    <div><h4 className='dactinh'>S???ch s???:</h4></div>
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a7419e60fd1d8393884146a8f2732552.svg" className='sodiemdactinhsao' />
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a7419e60fd1d8393884146a8f2732552.svg" className='sodiemdactinhsao' />
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a7419e60fd1d8393884146a8f2732552.svg" className='sodiemdactinhsao' />
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a7419e60fd1d8393884146a8f2732552.svg" className='sodiemdactinhsao' />
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a7419e60fd1d8393884146a8f2732552.svg" className='sodiemdactinhsao' />
                  </div>

                  <div className='chisodanhgiadactinh'>
                    <div><h4 className='dactinh'>Tho???i m??i: </h4></div>
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a7419e60fd1d8393884146a8f2732552.svg" className='sodiemdactinhsao' />
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a7419e60fd1d8393884146a8f2732552.svg" className='sodiemdactinhsao' />
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a7419e60fd1d8393884146a8f2732552.svg" className='sodiemdactinhsao' />
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a7419e60fd1d8393884146a8f2732552.svg" className='sodiemdactinhsao' />
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a7419e60fd1d8393884146a8f2732552.svg" className='sodiemdactinhsao' />
                  </div>

                  <div className='chisodanhgiadactinh'>
                    <div><h4 className='dactinh'>????? ??n: </h4></div>
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a7419e60fd1d8393884146a8f2732552.svg" className='sodiemdactinhsao' />
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a7419e60fd1d8393884146a8f2732552.svg" className='sodiemdactinhsao' />
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a7419e60fd1d8393884146a8f2732552.svg" className='sodiemdactinhsao' />
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a7419e60fd1d8393884146a8f2732552.svg" className='sodiemdactinhsao' />
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/89c0e2c221f89cd5ea21beabd5bc4ba8.svg" className='sodiemdactinhsao' />
                  </div>

                  <div className='chisodanhgiadactinh'>
                    <div><h4 className='dactinh'>V??? tr??: </h4></div>
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a7419e60fd1d8393884146a8f2732552.svg" className='sodiemdactinhsao' />
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a7419e60fd1d8393884146a8f2732552.svg" className='sodiemdactinhsao' />
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a7419e60fd1d8393884146a8f2732552.svg" className='sodiemdactinhsao' />
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a7419e60fd1d8393884146a8f2732552.svg" className='sodiemdactinhsao' />
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/712367ee4e183cc414efbd8d338b4f49.svg" className='sodiemdactinhsao' />
                  </div>

                  <div className='chisodanhgiadactinh'>
                    <div><h4 className='dactinh'>D???ch v???: </h4></div>
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a7419e60fd1d8393884146a8f2732552.svg" className='sodiemdactinhsao' />
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a7419e60fd1d8393884146a8f2732552.svg" className='sodiemdactinhsao' />
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a7419e60fd1d8393884146a8f2732552.svg" className='sodiemdactinhsao' />
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a7419e60fd1d8393884146a8f2732552.svg" className='sodiemdactinhsao' />
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/712367ee4e183cc414efbd8d338b4f49.svg" className='sodiemdactinhsao' />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div style={{marginBottom:'10px'}}></div>

        <div>
          <form className='formsortingvacomment'>
            <div style={{display:'flex'}} /*div tong cho ca 3 phan sorting*/>

              {/*sort theo thoi gian va dia diem*/}
              <div className='divsorttheotimevadiemleft'>
                <div className='hinhsort'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSystemToolSort"><path d="M3 6H15.5M3 12H12.5M3 18H9" stroke="#8f8f8f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 6V19.5M19 19.5L16.5 17M19 19.5L21.5 17" stroke="#8f8f8f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                <div style={{paddingLeft:'8px'}}>
                  <div><h4 className='titlesapxep'>S???p x???p</h4></div>
                  <div className='sorttheotimevadiemdatadiv'>
                    <select name="" id="" className='sorttheotimevadiemdata'>
                      <option value="">G???n ????y nh???t</option>
                      <option value="">??i???m (Th???p ?????n cao)</option>
                      <option value="">??i???m (Cao ?????n th???p)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/*sort theo phan loai chuyen di*/}
              <div className='divsorttheotimevadiem'>
                <div className='hinhsort'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSystemToolFilter"><path d="M9 6H21M3 6H5M19 12H21M3 12H15M14 18H21M3 18H10" stroke="#8f8f8f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7 8C8.10457 8 9 7.10457 9 6C9 4.89543 8.10457 4 7 4C5.89543 4 5 4.89543 5 6C5 7.10457 5.89543 8 7 8Z" stroke="#8f8f8f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17 14C18.1046 14 19 13.1046 19 12C19 10.8954 18.1046 10 17 10C15.8954 10 15 10.8954 15 12C15 13.1046 15.8954 14 17 14Z" stroke="#8f8f8f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20Z" stroke="#8f8f8f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                <div style={{paddingLeft:'8px'}}>
                  <div><h4 className='titlesapxep'>Ph??n lo???i</h4></div>
                  <div className='sorttheotimevadiemdatadiv'>
                    <select name="" id="" className='sorttheotimevadiemdata'>
                      <option value="">T???t c???</option>
                      <option value="">Chuy???n ??i ng???n ng??y</option>
                      <option value="">Ngh??? d?????ng</option>
                      <option value="">C??ng t??c</option>
                    </select>
                  </div>
                </div>
              </div>

              {/*sort theo ngon ngu*/}
              <div className='divsorttheotimevadiemright'>
                <div className='hinhsort'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSystemToolSort"><path d="M3 6H15.5M3 12H12.5M3 18H9" stroke="#8f8f8f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 6V19.5M19 19.5L16.5 17M19 19.5L21.5 17" stroke="#8f8f8f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                <div style={{paddingLeft:'8px'}}>
                  <div><h4 className='titlesapxep'>Ng??n ng???</h4></div>
                  <div className='sorttheotimevadiemdatadiv'>
                    <select name="" id="" className='sorttheotimevadiemdata'>
                      <option value="">Ti???ng Vi???t</option>
                      <option value="">Ti???ng Anh (English)</option>
                      <option value="">Ti???ng Indonesia</option>
                      <option value="">Ti???ng Malaysia</option>
                      <option value="">Ti???ng Th??i</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{marginTop:'10px'}}></div>

            {/*Phan nay la phan comment cua khach*/}
            <div>

              <div className='commentcuakhach'>
                <div className='anhdaidienvatenkhach'>
                  <div className='divanhdaidien'>
                    <div className='khunganhdaidien'>CP</div>
                  </div>
                  <div className='divtenkhachcomment'>
                    <div className='tenkhachcomment'>Chi P.</div>
                    <div className='loaitaikhoan'>T??i kho???n th?????ng</div>
                  </div>
                </div>

                <div className='danhgiavangaydangcuakhach'>
                  <div className='diemdanhgia'>
                    <div className='diemdanhgiacuakhach'>
                      <div className='sodiemduocchon'>4.3 </div>
                      <div className='trentongsodiem'>/ 5</div>
                    </div>
                  </div>

                  <div className='ngaydang'>
                    <div className='ngaydangtext'>26 Th.4 2022</div>
                  </div>
                </div>

                <div className='loaichuyendi'>
                  <div className='thehienloaichuyendi'>
                    <div className='thehienloaichuyenditext'>K?? ngh??? l???</div>
                  </div>
                </div>

                <div className='noidungcuacomment'>
                  <div className='noidungcommenttext'>
                  T??i ???? c?? 1 k??? ngh??? tuy???t v???i t???i Dalat ????. V?? ??i c?? 2 ng?????i n??n ch??ng t??i ???? ?????t ph??ng ??? kh??ch s???n. Kh??ch s???n r???t xinh theo phong c??ch Ho??ng Gia. M???i th??? ???????c cbi r???t chu ????o, c??c b???n l??? t??n c??ng r???t d??? th????ng. Kh??ch s???n c?? cho thu?? xe nha. Xe ga 150k ?????n 23h c??ng ng??y. Xe s??? th?? ch??a c?? c?? h???i thu?? v?? kh??ch ????ng qu?? xu???ng thu?? th?? h???t m???t ti??u r??i. M??nh r???t h??i l??ng. T???i Dalat ???????c nghe gi???ng ng?????i Dalat th??i m?? ???? th???y y??n b??nh nh??? nh??ng d??? ch???u l???m r???i. C??c b???n h??y th??? t???i ????y nha???? Ti???c l?? ch??? quay video s???nh kh??ch s???n. Kh??ng l?? ???? ????ng cho m???i ng?????i coi r??i ???? ????
                  </div>
                </div>

                <div className='nutlike'>
                  <div style={{display:'flex'}}>
                    <div>
                      <input type="checkbox" name="checkthich" id="" className='checkthichbinhluan'/>
                    </div>
                    <div>
                      <h4 className='thichdanhgiakhong'>B???n th??ch ????nh gi?? n??y?</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className='commentcuakhach'>
                <div className='anhdaidienvatenkhach'>
                  <div className='divanhdaidien'>
                    <div className='khunganhdaidien'>CP</div>
                  </div>
                  <div className='divtenkhachcomment'>
                    <div className='tenkhachcomment'>Chi P.</div>
                    <div className='loaitaikhoan'>T??i kho???n th?????ng</div>
                  </div>
                </div>

                <div className='danhgiavangaydangcuakhach'>
                  <div className='diemdanhgia'>
                    <div className='diemdanhgiacuakhach'>
                      <div className='sodiemduocchon'>4.3 </div>
                      <div className='trentongsodiem'>/ 5</div>
                    </div>
                  </div>

                  <div className='ngaydang'>
                    <div className='ngaydangtext'>26 Th.4 2022</div>
                  </div>
                </div>

                <div className='loaichuyendi'>
                  <div className='thehienloaichuyendi'>
                    <div className='thehienloaichuyenditext'>K?? ngh??? l???</div>
                  </div>
                </div>

                <div className='noidungcuacomment'>
                  <div className='noidungcommenttext'>
                  T??i ???? c?? 1 k??? ngh??? tuy???t v???i t???i Dalat ????. V?? ??i c?? 2 ng?????i n??n ch??ng t??i ???? ?????t ph??ng ??? kh??ch s???n. Kh??ch s???n r???t xinh theo phong c??ch Ho??ng Gia. M???i th??? ???????c cbi r???t chu ????o, c??c b???n l??? t??n c??ng r???t d??? th????ng. Kh??ch s???n c?? cho thu?? xe nha. Xe ga 150k ?????n 23h c??ng ng??y. Xe s??? th?? ch??a c?? c?? h???i thu?? v?? kh??ch ????ng qu?? xu???ng thu?? th?? h???t m???t ti??u r??i. M??nh r???t h??i l??ng. T???i Dalat ???????c nghe gi???ng ng?????i Dalat th??i m?? ???? th???y y??n b??nh nh??? nh??ng d??? ch???u l???m r???i. C??c b???n h??y th??? t???i ????y nha???? Ti???c l?? ch??? quay video s???nh kh??ch s???n. Kh??ng l?? ???? ????ng cho m???i ng?????i coi r??i ???? ????
                  </div>
                </div>

                <div className='nutlike'>
                  <div style={{display:'flex'}}>
                    <div>
                      <input type="checkbox" name="checkthich" id="" className='checkthichbinhluan'/>
                    </div>
                    <div>
                      <h4 className='thichdanhgiakhong'>B???n th??ch ????nh gi?? n??y?</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className='commentcuakhach'>
                <div className='anhdaidienvatenkhach'>
                  <div className='divanhdaidien'>
                    <div className='khunganhdaidien'>CP</div>
                  </div>
                  <div className='divtenkhachcomment'>
                    <div className='tenkhachcomment'>Chi P.</div>
                    <div className='loaitaikhoan'>T??i kho???n th?????ng</div>
                  </div>
                </div>

                <div className='danhgiavangaydangcuakhach'>
                  <div className='diemdanhgia'>
                    <div className='diemdanhgiacuakhach'>
                      <div className='sodiemduocchon'>4.3 </div>
                      <div className='trentongsodiem'>/ 5</div>
                    </div>
                  </div>

                  <div className='ngaydang'>
                    <div className='ngaydangtext'>26 Th.4 2022</div>
                  </div>
                </div>

                <div className='loaichuyendi'>
                  <div className='thehienloaichuyendi'>
                    <div className='thehienloaichuyenditext'>K?? ngh??? l???</div>
                  </div>
                </div>

                <div className='noidungcuacomment'>
                  <div className='noidungcommenttext'>
                  T??i ???? c?? 1 k??? ngh??? tuy???t v???i t???i Dalat ????. V?? ??i c?? 2 ng?????i n??n ch??ng t??i ???? ?????t ph??ng ??? kh??ch s???n. Kh??ch s???n r???t xinh theo phong c??ch Ho??ng Gia. M???i th??? ???????c cbi r???t chu ????o, c??c b???n l??? t??n c??ng r???t d??? th????ng. Kh??ch s???n c?? cho thu?? xe nha. Xe ga 150k ?????n 23h c??ng ng??y. Xe s??? th?? ch??a c?? c?? h???i thu?? v?? kh??ch ????ng qu?? xu???ng thu?? th?? h???t m???t ti??u r??i. M??nh r???t h??i l??ng. T???i Dalat ???????c nghe gi???ng ng?????i Dalat th??i m?? ???? th???y y??n b??nh nh??? nh??ng d??? ch???u l???m r???i. C??c b???n h??y th??? t???i ????y nha???? Ti???c l?? ch??? quay video s???nh kh??ch s???n. Kh??ng l?? ???? ????ng cho m???i ng?????i coi r??i ???? ????
                  </div>
                </div>

                <div className='nutlike'>
                  <div style={{display:'flex'}}>
                    <div>
                      <input type="checkbox" name="checkthich" id="" className='checkthichbinhluan'/>
                    </div>
                    <div>
                      <h4 className='thichdanhgiakhong'>B???n th??ch ????nh gi?? n??y?</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className='commentcuakhach'>
                <div className='anhdaidienvatenkhach'>
                  <div className='divanhdaidien'>
                    <div className='khunganhdaidien'>CP</div>
                  </div>
                  <div className='divtenkhachcomment'>
                    <div className='tenkhachcomment'>Chi P.</div>
                    <div className='loaitaikhoan'>T??i kho???n th?????ng</div>
                  </div>
                </div>

                <div className='danhgiavangaydangcuakhach'>
                  <div className='diemdanhgia'>
                    <div className='diemdanhgiacuakhach'>
                      <div className='sodiemduocchon'>4.3 </div>
                      <div className='trentongsodiem'>/ 5</div>
                    </div>
                  </div>

                  <div className='ngaydang'>
                    <div className='ngaydangtext'>26 Th.4 2022</div>
                  </div>
                </div>

                <div className='loaichuyendi'>
                  <div className='thehienloaichuyendi'>
                    <div className='thehienloaichuyenditext'>K?? ngh??? l???</div>
                  </div>
                </div>

                <div className='noidungcuacomment'>
                  <div className='noidungcommenttext'>
                  T??i ???? c?? 1 k??? ngh??? tuy???t v???i t???i Dalat ????. V?? ??i c?? 2 ng?????i n??n ch??ng t??i ???? ?????t ph??ng ??? kh??ch s???n. Kh??ch s???n r???t xinh theo phong c??ch Ho??ng Gia. M???i th??? ???????c cbi r???t chu ????o, c??c b???n l??? t??n c??ng r???t d??? th????ng. Kh??ch s???n c?? cho thu?? xe nha. Xe ga 150k ?????n 23h c??ng ng??y. Xe s??? th?? ch??a c?? c?? h???i thu?? v?? kh??ch ????ng qu?? xu???ng thu?? th?? h???t m???t ti??u r??i. M??nh r???t h??i l??ng. T???i Dalat ???????c nghe gi???ng ng?????i Dalat th??i m?? ???? th???y y??n b??nh nh??? nh??ng d??? ch???u l???m r???i. C??c b???n h??y th??? t???i ????y nha???? Ti???c l?? ch??? quay video s???nh kh??ch s???n. Kh??ng l?? ???? ????ng cho m???i ng?????i coi r??i ???? ????
                  </div>
                </div>

                <div className='nutlike'>
                  <div style={{display:'flex'}}>
                    <div>
                      <input type="checkbox" name="checkthich" id="" className='checkthichbinhluan'/>
                    </div>
                    <div>
                      <h4 className='thichdanhgiakhong'>B???n th??ch ????nh gi?? n??y?</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className='commentcuakhach'>
                <div className='anhdaidienvatenkhach'>
                  <div className='divanhdaidien'>
                    <div className='khunganhdaidien'>CP</div>
                  </div>
                  <div className='divtenkhachcomment'>
                    <div className='tenkhachcomment'>Chi P.</div>
                    <div className='loaitaikhoan'>T??i kho???n th?????ng</div>
                  </div>
                </div>

                <div className='danhgiavangaydangcuakhach'>
                  <div className='diemdanhgia'>
                    <div className='diemdanhgiacuakhach'>
                      <div className='sodiemduocchon'>4.3 </div>
                      <div className='trentongsodiem'>/ 5</div>
                    </div>
                  </div>

                  <div className='ngaydang'>
                    <div className='ngaydangtext'>26 Th.4 2022</div>
                  </div>
                </div>

                <div className='loaichuyendi'>
                  <div className='thehienloaichuyendi'>
                    <div className='thehienloaichuyenditext'>K?? ngh??? l???</div>
                  </div>
                </div>

                <div className='noidungcuacomment'>
                  <div className='noidungcommenttext'>
                  T??i ???? c?? 1 k??? ngh??? tuy???t v???i t???i Dalat ????. V?? ??i c?? 2 ng?????i n??n ch??ng t??i ???? ?????t ph??ng ??? kh??ch s???n. Kh??ch s???n r???t xinh theo phong c??ch Ho??ng Gia. M???i th??? ???????c cbi r???t chu ????o, c??c b???n l??? t??n c??ng r???t d??? th????ng. Kh??ch s???n c?? cho thu?? xe nha. Xe ga 150k ?????n 23h c??ng ng??y. Xe s??? th?? ch??a c?? c?? h???i thu?? v?? kh??ch ????ng qu?? xu???ng thu?? th?? h???t m???t ti??u r??i. M??nh r???t h??i l??ng. T???i Dalat ???????c nghe gi???ng ng?????i Dalat th??i m?? ???? th???y y??n b??nh nh??? nh??ng d??? ch???u l???m r???i. C??c b???n h??y th??? t???i ????y nha???? Ti???c l?? ch??? quay video s???nh kh??ch s???n. Kh??ng l?? ???? ????ng cho m???i ng?????i coi r??i ???? ????
                  </div>
                </div>

                <div className='nutlike'>
                  <div style={{display:'flex'}}>
                    <div>
                      <input type="checkbox" name="checkthich" id="" className='checkthichbinhluan'/>
                    </div>
                    <div>
                      <h4 className='thichdanhgiakhong'>B???n th??ch ????nh gi?? n??y?</h4>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
          </form>
        </div>
      </div>

      <div style={{marginBottom:'15px'}}></div>
      <Footer/>
    </div>
  )
}

export default InfoRoom;