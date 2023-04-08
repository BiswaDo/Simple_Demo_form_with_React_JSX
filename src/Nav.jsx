function nav() {
  return (
    <nav className="navbar">
      <div className="nav-brand">ConvertU</div>
      <div className="nav_list">
        <ul className="nav-item">
          <li>About</li>
          <li>Help</li>
          <li>Contact</li>
        </ul>
        <div className="menu_btn"></div>
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
