import praise from '../assets/praise.png'
import denounce from '../assets/denounce.png'
import simplify from '../assets/simplify.png'
import support from '../assets/support.png'
import complaint from '../assets/complaint.png'

const Buttons = () => {
  return (
    <div  className='ml-10 mr-10 grid gap-4 grid-cols-3 grid-rows-3'>
      <div className="artboard artboard-horizontal phone-1 cursor-pointer"> 
        <img src={denounce} className="max-w-full lg:max-w-96 rounded-lg lg:mr-16" />
      </div>
      <div className="artboard artboard-horizontal phone-1 cursor-pointer"> 
        <img src={praise} className="max-w-full lg:max-w-96 rounded-lg lg:mr-16" />
      </div>
      <div className="artboard artboard-horizontal phone-1 cursor-pointer"> 
        <img src={complaint} className="max-w-full lg:max-w-96 rounded-lg lg:mr-16" />
      </div>
      <div className="artboard artboard-horizontal phone-1 cursor-pointer"> 
        <img src={simplify} className="max-w-full lg:max-w-96 rounded-lg lg:mr-16" />
      </div>
      <div className="artboard artboard-horizontal phone-1 cursor-pointer"> 
        <img src={support} className="max-w-full lg:max-w-96 rounded-lg lg:mr-16" />
      </div>
    </div>
  )
}

export default Buttons
