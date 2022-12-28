function PageTitle({ title, bgColor = "#000", color = "#000" }) {

  return (
    <div className="mb-5 mt-2 pageTitle">
      <span className="py-1 px-2 rounded-lg shadow-lg font-semibold" style={{ backgroundColor: bgColor, color: color }}>{title}</span>
    </div>
  )
}

export default PageTitle