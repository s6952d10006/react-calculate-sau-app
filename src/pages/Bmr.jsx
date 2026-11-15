import { Link } from "react-router"
import { FiArrowLeft, FiRefreshCw } from "react-icons/fi"
import bmr from "./../assets/bmr.png"

export default function Bmr() {
  return (
    <>
      <main className="calculator-page">
        {/* แสดงรูปและชื่อหน้าจอ */}
        <h1 className="calculator-title">BMR Calculator</h1>
        <p className="calculator-subtitle">คำนวณ BMR</p>
        <div className="calculator-art">
          <img src={bmr} alt="BMR" width="80" height="80" />
        </div>

        {/* ส่วนของฟอร์ม สำหรับป้อน เลือก คลิก */}
        <form className="calculator-form">
          <label htmlFor="bmr-weight">น้ำหนัก (กิโลกรัม)</label>
          <input type="number" name="weight" id="bmr-weight" placeholder="เช่น 65" step="any" className="field-input" />

          <label htmlFor="bmr-height">ส่วนสูง (เซนติเมตร)</label>
          <input type="number" name="height" id="bmr-height" placeholder="เช่น 170" step="any" className="field-input" />

          <label htmlFor="bmr-age">อายุ (ปี)</label>
          <input type="number" name="age" id="bmr-age" placeholder="เช่น 25" step="1" className="field-input" />

          <fieldset className="gender-field">
            <legend>เพศ</legend>
            <div className="gender-options">
              <label className="gender-option">
                <input type="radio" name="gender" value="male" defaultChecked />
                ชาย
              </label>
              <label className="gender-option">
                <input type="radio" name="gender" value="female" />
                หญิง
              </label>
            </div>
          </fieldset>

          <div className="form-actions">
            <button type="button" className="button button-primary">คำนวณ BMR</button>
            <button type="button" className="button button-secondary">
              <FiRefreshCw aria-hidden="true" /> รีเซ็ต
            </button>
          </div>
        </form>

        {/* ส่วนแสดงผลตัวอย่าง ยังไม่มีการคำนวณ */}
        <div role="status" aria-live="polite" aria-atomic="true" className="result-panel">
          <p className="result-label">ค่า BMR ที่คำนวณได้</p>
          <p className="result-value">
            <span className="result-number">0.00</span>
            <span className="result-unit">กิโลแคลอรี/วัน</span>
          </p>
        </div>

        {/* ส่วนลิงก์กลับไปหน้าหลัก */}
        <Link to="/" className="back-link"><FiArrowLeft aria-hidden="true" /> กลับหน้าหลัก</Link>
      </main>
    </>
  )
}
