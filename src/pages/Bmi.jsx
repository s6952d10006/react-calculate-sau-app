import { Link } from "react-router"
import { FiArrowLeft, FiRefreshCw } from "react-icons/fi"
import bmi from "./../assets/bmi.png"

export default function Bmi() {
  return (
    <>
      <main className="calculator-page">
        {/* แสดงรูปและชื่อหน้าจอ */}
        <h1 className="calculator-title">BMI Calculator</h1>
        <p className="calculator-subtitle">คำนวณ BMI</p>
        <div className="calculator-art">
          <img src={bmi} alt="BMI" width="80" height="80" />
        </div>

        {/* ส่วนของฟอร์ม สำหรับป้อน เลือก คลิก */}
        <form className="calculator-form">
          <label htmlFor="bmi-weight">ป้อนน้ำหนัก (กิโลกรัม)</label>
          <input type="number" name="weight" id="bmi-weight" placeholder="เช่น 65" step="any" className="field-input" />

          <label htmlFor="bmi-height">ป้อนส่วนสูง (เซนติเมตร)</label>
          <input type="number" name="height" id="bmi-height" placeholder="เช่น 170" step="any" className="field-input" />

          <button type="button" className="button button-primary button-full">คำนวณ BMI</button>
          <button type="button" className="button button-secondary button-full">
            <FiRefreshCw aria-hidden="true" /> รีเซ็ต
          </button>
        </form>

        {/* ส่วนแสดงผลตัวอย่าง ยังไม่มีการคำนวณ */}
        <div role="status" aria-live="polite" aria-atomic="true" className="result-panel">
          <p className="result-label">ค่า BMI ที่คำนวณได้</p>
          <p className="result-value"><span className="result-number">0.00</span></p>
        </div>

        {/* ส่วนลิงก์กลับไปหน้าหลัก */}
        <Link to="/" className="back-link"><FiArrowLeft aria-hidden="true" /> กลับหน้าหลัก</Link>
      </main>
    </>
  )
}
