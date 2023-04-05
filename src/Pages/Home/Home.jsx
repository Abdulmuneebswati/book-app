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
      <h1 className="text-[50px] font-bold text-[#ffffff] mt-[50px]  font-cenzel"> <span className="text-[100px] text-[#FAAB9F]">W</span>ELCOME <span className=" ml-[25px]">TO THE </span> <br />
      NATIONAL  &nbsp; &nbsp; LIBRARY</h1>
      <h2 className="text-[40px] font-cenzel mt-[30px] ">BORROW BOOK</h2>
</div>
    </div>
  )
}

export default Home
