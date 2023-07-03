import  './Navbar.css'


function Navbar() {
  return (
    <div className='container'>
        <div className='menu_icon'>
        <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        </div>
        <div className='logo_header'>
          <img src="https://cdn.fishry.com/themes/MVS-Logo-a8ce9c9-myvitaminstore-603a7ed-my-vitamin-store.png" alt="" className="logo_img" />
        </div>
        <div className="search_wrap search_wrap_2">
          <div className="search_box">
            <input type="text" className='input' placeholder='Search Product You Need' />
            <div className="btn btn_common">
            <svg className='fas' xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 512 512" fill='#ffffff'><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </div>
          </div>
        </div>
        <nav className="header_top">
        <ul className="header_nav">
          <li>About US</li>
          <li>How to Order</li>
          <li>Sign in/Register</li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="10" cy="28" r="2" fill="currentColor"/><circle cx="24" cy="28" r="2" fill="currentColor"/><path fill="currentColor" d="M4.98 2.804A1 1 0 0 0 4 2H0v2h3.18l3.84 19.196A1 1 0 0 0 8 24h18v-2H8.82l-.8-4H26a1 1 0 0 0 .976-.783L29.244 7h-2.047l-1.999 9H7.62Z"/><path fill="currentColor" d="M18 6V2h-2v4h-4v2h4v4h2V8h4V6h-4z"/></svg></li>
        </ul>
        </nav>
    </div>

  )
}

export default Navbar