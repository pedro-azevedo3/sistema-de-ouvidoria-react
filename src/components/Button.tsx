import praise from '../assets/praise.png'

const Buttons = () => {
  return (
    <div>
      <div className="artboard artboard-horizontal phone-1 cursor-pointer ml-10"> 
        <img src={praise} className="max-w-full lg:max-w-96 rounded-lg lg:mr-16" />
      </div>
    </div>
  )
}

export default Buttons
