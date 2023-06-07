import React from 'react'
import Time from './../tools/Time';
import '../../App.css'
import clientImage from '../../image/clientImage.webp'

function Client() {
  return (
    <div className='flex_box client'>
      <div className='flex_title'>
        <h1>Шинэ үйлчлүүлэгч</h1>
      </div>
      <div className='client_box'>
          <div>
            <img src={clientImage} alt="" />
          </div>
          <div>
            <h3>Шинэ үйлчлүүлэгч</h3>
            <p>
              Эмэгтэйчүүдийн биений юмны нэг мөчлөгийн турш хянаж үзлэг 
              шинжилгээнд орсны дараагаар онош тодруулах боломжтой 
              байдаг бөгөөд хамгийн эхний үзлэг шинжилгээ биений юмны 
              3 дахь өдрөөс эхэлнэ. Та биены юмны эхний өдрөө цаг авч 
              үйлчлүүлээрэй. Манай төвд карт нээлгэн үйлчлүүлэхэд дараах 
              бичиг баримт шаардлагатай.
            </p>
            <h5>Үүнд:</h5>
            <ul>
              <li>Эхнэр, нөхрийн иргэний үнэмлэхний хуулбар</li>
              <li>Гэрлэлт бүртгэлийн гэрчилгээний хуулбар</li>
              <li>Гэрлэлт бүртгэлгүй бол эхнэр нөхрийн гэрлэлт бүртгэлгүй лавлагаа</li>
            </ul>
        </div>
      </div>
      <Time/>
    </div>
  )
}

export default Client
