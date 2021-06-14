import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar p-4">
      <div className="navbar-header">
        <div className="navbar-brand">
          <h1 className="is-size-1 title has-text-darkgrey">Mindtales</h1>
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link href="/">
            <a className="navbar-item is-size-4">Home</a>
          </Link>

          <Link href="/about">
            <a className="navbar-item is-size-4">About</a>
          </Link>

          <Link href="/contact">
            <a className="navbar-item is-size-4">Contact</a>
          </Link>

          <div class="navbar-item">
            <div class="buttons">
              <p class="button is-link is-outlined is-rounded">
                <strong>Login/Signup</strong>
              </p>
              <a class="button is-danger is-outlined is-rounded">
                <strong>Logout</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
