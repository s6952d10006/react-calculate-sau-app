import { Link } from "react-router"
import { FiArrowLeft, FiRefreshCw } from "react-icons/fi"
import car from "./../assets/car.png"

export default function Car() {
  return (
    <>
      <main className="calculator-page">
        {/* แสดงรูปและชื่อหน้าจอ */}
        <h1 className="calculator-title">Car Installment Calculator</h1>
        <p className="calculator-subtitle">คำนวณเงินผ่อนรถยนต์</p>
        <div className="calculator-art">
          <img src={car} alt="รถยนต์" width="80" height="80" />
        </div>

        {/* ส่วนของฟอร์ม สำหรับป้อน เลือก คลิก */}
        <form className="calculator-form">
          <label htmlFor="car-buyer">ชื่อผู้ซื้อ (ไม่บังคับ)</label>
          <input type="text" name="buyerName" id="car-buyer" autoComplete="name" className="field-input" />

          <label htmlFor="car-price">ราคารถ (บาท)</label>
          <input type="number" name="price" id="car-price" placeholder="เช่น 600000" step="any" className="field-input" />

          <label htmlFor="car-interest">อัตราดอกเบี้ยต่อปี (%)</label>
          <input type="number" name="interestRate" id="car-interest" placeholder="เช่น 3" step="any" className="field-input" />

          <label htmlFor="car-down-payment">เงินดาวน์ (%)</label>
          <input type="number" name="downPayment" id="car-down-payment" placeholder="เช่น 20" step="any" className="field-input" />

          <label htmlFor="car-months">จำนวนเดือนที่ผ่อน</label>
          <select defaultValue="24" name="months" id="car-months" className="field-input">
            <option value="24">24 เดือน</option>
            <option value="36">36 เดือน</option>
            <option value="48">48 เดือน</option>
            <option value="60">60 เดือน</option>
            <option value="72">72 เดือน</option>
            <option value="84">84 เดือน</option>
          </select>

          <div className="form-actions">
            <button type="button" className="button button-primary">คำนวณเงินผ่อน</button>
            <button type="button" className="button button-secondary">
              <FiRefreshCw aria-hidden="true" /> รีเซ็ต
            </button>
          </div>
        </form>

        {/* ส่วนแสดงผลตัวอย่าง ยังไม่มีการคำนวณ */}
        <div role="status" aria-live="polite" aria-atomic="true" className="result-panel">
          <p className="result-label">ผ่อนชำระต่อเดือน</p>
          <p className="result-value">
            <span className="result-number">
              0.00
            </span>
            <span className="result-unit">บาท</span>
          </p>
        </div>

        {/* ส่วนลิงก์กลับไปหน้าหลัก */}
        <Link to="/" className="back-link"><FiArrowLeft aria-hidden="true" /> กลับหน้าหลัก</Link>
      </main>
    </>
  )
}
