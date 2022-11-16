import Link from "next/link"

const PrimaryBtn = (props) => {
  return (
    <div className="primary-btn" style={{ background: props.backColor? props.backColor : '' }}>
        <Link style={{textDecoration: 'none'}} href={props.link}>
            <span>{props.text}</span>
        </Link>
    </div>
    
  )
}

export default PrimaryBtn