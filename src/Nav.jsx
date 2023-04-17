function nav() {
  function popUp() {
    const actBtn = document.getElementsByClassName("active_menu")[0];

    if (actBtn.style.display !== "flex") {
      actBtn.style.display = "flex";
    } else {
      actBtn.style.display = "none";
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-brand">ConvertU</div>
      <div className="nav_list">
        <ul className="nav-item">
          <li>About</li>
          <li>Help</li>
          <li>Contact</li>
        </ul>
        <div onClick={popUp} className="menu_btn"></div>
        <div className="active_menu">
          <div className="menu">
            <li>About</li>
            <li>Help</li>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default nav;
