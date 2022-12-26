function PageTitle({ title, bgColor = "#ebebeb", color = "#000" }) {

  return (
    <div className="my-2">
      <span className="py-1 px-2 rounded-lg" style={{ backgroundColor: bgColor, color: color }}>{title}</span>
    </div>
  )
}

export default PageTitle