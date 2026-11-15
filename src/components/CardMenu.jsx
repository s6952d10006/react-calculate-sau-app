import { Link } from "react-router"
import { FiArrowRight } from "react-icons/fi"

export default function CardMenu({showImg, showTitle, showDetail, routePath}) {
  return (
    <Link to={routePath} className="menu-card">
      <div className="menu-card-art">
        <img src={showImg} alt="" width="88" height="88" />
      </div>

      <h2 className="menu-card-title">{showTitle}</h2>
      <p className="menu-card-detail">{showDetail}</p>

      <span className="menu-card-action">
        เริ่มคำนวณ <FiArrowRight aria-hidden="true" />
      </span>
    </Link>
  )
}
