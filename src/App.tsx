
import './App.css'
import img from './assets/img/anh.jpg'
function App() {
 

  return (
    <>
    <div className="container font-bold">
  <div className="conten">
    <div className="anh">
      <img src={img}  />
    </div>
    <div className="contenleft">
      <h1>Họ tên : Nguyễn Khắc Cường</h1>
      <h3>Quê quán :Hà Nội</h3>
      <h3>Định Hướng:Fontend</h3>
      <h3>Ngôn ngữ đã học : </h3>
      <div className="cn">
        <h2>javascript</h2>
      </div>
      <div className="cn">
        <h2>HTML,CSS</h2>
      </div>
      <div className="cn">
        <h2>PHP</h2>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default App
