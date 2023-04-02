import Background from "../../assets/background2.png"

const Home = () => {
  return (
    <div className='h-[85vh]' style={{backgroundImage:`url(${Background}) `,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    }}>
     <div className="p-[10px] ml-[100px] ">
      <h1 className="text-[50px] font-bold text-[#ffffff] mt-[50px]  font-cenzel"> <span className="text-[100px] text-[#FAAB9F]">S</span>ELL <span className=" ml-[25px]">YOUR</span> <br />
BOOK</h1>

</div>
    </div>
  )
}

export default Home
