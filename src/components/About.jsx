import React, {Component} from "react"
import { Animated} from "react-animated-css";
import { Image,  Carousel} from 'react-bootstrap';


export default class About extends Component {
  render() {
    return(
<div>
       <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
           <div>
                <img width={320} height={250} alt="" src="favicon.ico" align="left" href="/"/>
           </div>
       </Animated>
       <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
           <div>
                <h1 className="text">พวกเรา คือ ชาวสวนดอกไม้ของคุณอุ้ม</h1>
                <h2 className="text"> ความเป็นมาของชื่อ:</h2>
                <h3 className="text"> สมัยก่อนเราใช้ชื่อห้องไลน์ว่า Oom BNK48 Thailand Fans
                  จนกระทั่งมีการเปิดโหวตชื่อด้อม เพราะอยากให้น้องมีชื่อเรียกกลุ่มแฟนคลับของน้อง
                  เลยมีการเปิดโหวตชื่อด้อมขึ้น แต่ผลโหวตยังไม่ทันออก เราก็ได้ชื่อด้อมกันแล้ว
                  โดยเพื่อนน้องที่อยู่ในกลุ่มไลน์ เอาชื่อด้อมที่เปิดโหวตไปให้น้องเลือก
                  และน้องก็เลือกชื่อ "อุ้มอิ้มการ์เด้น" น้องบอกว่าน่ารักดี
                  เราเลยมีชื่อด้อมกันใช้ทุกวันนี้จร้า</h3>
                 </div>
           </Animated>
         <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
             <div class='contianer-fluid'>
                    <a href="https://www.facebook.com/oomimgarden/">
                          <Image className="BTN"width={50} height={50} alt="50x50" src="Image/FB.png" rounded/>
                   </a>
                   <a href="https://www.instagram.com/oomimgarden/">
                         <Image className="BTN"width={60} height={60} alt="50x50" src="Image/IG.png" rounded/>
                  </a>
                  <a href="https://twitter.com/OomTHfans">
                        <Image className="BTN"width={50} height={50} alt="50x50" src="Image/twitter.png" rounded/>
                 </a>
             </div>
             </Animated>
             <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
           <div>
             <Carousel>
               <Carousel.Item>
                     <img  width={1600} height={900}alt="900x500" src="Image/Oomim Garden Fanclub1.jpg"  rounded/>
               <Carousel.Caption>
                   <h1 className="text1">Oomim Garden Fanclub</h1>
                   <h2 className="text2">ภาพ ณ งานจับมือ</h2>
                 </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                 <img width={1600} height={900}alt="900x500" src="Image/นุ่มนิ่มกับสเตจแรก.jpg"  rounded />
                 <Carousel.Caption>
                   <h1 className="text1">การเเสดงในเทียร์เตอร์สเตจเเรกของของคุณอุ้ม</h1>
                   <h2 className="text2">ภาพ ณ BNK48 THE CAMPUS</h2>
                 </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                 <img class=""width={1600} height={900} alt="900x500" src="Image/1st 2Gether Concert.jpg" rounded />
                 <Carousel.Caption>
                   <Image class=""width={80} height={80} alt="900x500" src="Image/1st 2Gether Concert 2.jpg" circle />
                   <h1 className="text1">1 st 2 Gether Concert</h1>
                   <h2 className="text2">ภาพ ณ CentralWorld</h2>
                 </Carousel.Caption>
               </Carousel.Item>
             </Carousel>
           </div>
           </Animated>
     </div>
   );
  }
}