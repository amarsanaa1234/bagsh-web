import React from 'react'
import image1 from '../../image/1-1.png'
import image2 from '../../image/1-2.png'
import image3 from '../../image/1-3.png'
import '../../App.css';

function Carreer() {
  return (
    <div className='flex_box'>
      <div className='flex_title'>
        <h1 className='components_title'>Хүний нөөц</h1>
      </div>
      <div className='carreer_box'>
        <div className='carreer'>
          <div className='carreer_image'>
            <img src={image1} alt="" width={450}/>
          </div>
          <div className='carreer_text'>
            <h1>Яагаад Юнител гэж?</h1>
            <p>
              Мэдээлэл технологийн үсрэнгүй хөгжил гэрлийн хурдаар 
              өсөн нэмэгдэж буй нэгэн зууны түүхийг бид хамтдаа 
              бүтээлцэж явна. Өмнөх үеийнхний минь мөрөөдөл бидний 
              өдөр тутмын амьдрал болж, ирээдүй хойчийнхоо 
              амьдралыг бидний мөрөөдөл тодорхойлох болжээ. Энэ л 
              үед та Монголын ICT салбарт тэргүүлэгч Юнител Группд 
              ажиллан эрч хүч, эерэг хандлага, бүтээлч сэтгэлгээ, 
              хүсэл эрмэлзлээр дүүрэн хамт олны нэг болж, өдөр бүр 
              өөрийн ур чадвараа тасралтгүй хөгжүүлээрэй.
            </p>
          </div>
        </div>
        <div className='carreer'>
        <div className='carreer_text'>
            <h1>Нээлттэй ажлын байр</h1>
            <p>
              Эрч хүч, эерэг хандлага, бүтээх хүсэл эрмэлзлээр 
              дүүрэн хамт олны нэг болж, байгууллагын үйл 
              ажиллагаа, бизнесийн өсөлт хөгжилд хувь нэмрээ 
              оруулж, харилцан үнэ цэнэ бүтээхийг хүсвэл та 
              яг одоо анкетаа илгээгээрэй. Шинийг эрэлхийлэгч, 
              шинэ үеийн залуустай хамтран ажиллахад бид бэлэн.
            </p>
          </div>
          <div className='carreer_image'>
            <img src={image2} alt="" width={450}/>
          </div>
        </div>
        <div className='carreer'>
          <div className='carreer_image'>
            <img src={image3} alt="" width={450}/>
          </div>
          <div className='carreer_text'>
            <h1>Сонгон шалгаруулалт</h1>
            <p>
              Та дараах хэсэг рүү орж, сонгон шалгаруулалтын үе шаттай танилцана уу.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carreer
