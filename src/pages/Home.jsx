import calculate from "./../assets/calculate.png";
import CardMenu from "./../components/CardMenu";
import bmi from "./../assets/bmi.png"
import bmr from "./../assets/bmr.png"
import car from "./../assets/car.png"
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main className="home-page">
        <header className="home-header">
          {/* แสดงรูป */}
          <img src={calculate} alt="เครื่องคิดเลข" className="home-logo" />

          {/* แสดงชื่อเว็บ */}
          <h1 className="home-title">เครื่องมือคำนวณออนไลน์</h1>
          <p className="home-description">
            เลือกการคำนวณที่คุณต้องการจากรายการด้านล่าง
          </p>
        </header>

        {/* แสดงเมนู 3 ใบ และเรียงเป็นแนวตั้งบนมือถือ */}
        <div className="menu-grid">
          <CardMenu showImg={bmi} showTitle="BMI (ดัชนีมวลกาย)"
                    showDetail="คำนวณความสมดุลของน้ำหนักและส่วนสูง" routePath="/bmi" />
          <CardMenu showImg={bmr} showTitle="BMR (อัตราเผาผลาญ)"
                    showDetail="คำนวณการเผาผลาญพลังงานที่ร่างกายต้องการ" routePath="/bmr" />
          <CardMenu showImg={car} showTitle="CAR (คำนวณเงินผ่อน)"
                    showDetail="คำนวณเงินผ่อนรถยนต์-รถจักรยานยนต์" routePath="/car" />
        </div>

        {/* แสดงส่วน Footer */}
        <Footer />
      </main>
    </>
  );
}
