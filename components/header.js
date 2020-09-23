import Link from 'next/link'

const Header = () => (
  <header>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/passo-fundo">
          <a>Passo Fundo</a>
        </Link>
      </li>
      <li>
        <Link href="/tapejara">
          <a>Tapejara</a>
        </Link>
      </li>
      <li>
        <Link href="/lagoa-vermelha">
          <a>Lagoa Vermelha</a>
        </Link>
      </li>
    </ul>
  </header>
)

export default Header
