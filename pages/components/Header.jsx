function Header() {
    return (
      <header className="flex gap-5 items-start self-stretch px-16 pt-6 pb-3 w-full text-3xl text-black whitespace-nowrap bg-yellow-500 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <nav className="flex gap-5 w-full">
          <a href="./" className="flex-auto self-stretch">Transportes</a>
          <a href="./PagNosotros" className="flex-auto">Nosotros</a>
          <a href="./PagContacto" className="flex-auto">Contacto</a>
        </nav>
      </header>
    );
  }
  export default Header;