import ShoppingBag from '@/assets/ShoppingBag.svg?react'
import StyledLink from './components/ui/StyledLink'

function App() {
  return (
    <>
      <div className="bg-slate-500">
        <div className="flex justify-center">
          <header className="fixed top-0">
            <nav>
              <ul className="flex gap-3">
                <li>
                  <StyledLink href="/home">Home</StyledLink>
                </li>
                <li>
                  <StyledLink href="/store">Store</StyledLink>
                </li>
                <li>
                  <StyledLink href="/page">Page</StyledLink>
                </li>
                <ShoppingBag href="/cart" className="hover:bg-gray-400" />
              </ul>
            </nav>
          </header>
        </div>

        <div className="md:container md:mx-auto">
          <main>
            <section className="flex h-screen flex-col items-center gap-20 md:container md:mx-auto">
              <h1 className="mt-20 text-4xl font-extrabold">Shop Ajvara</h1>
              <img
                className="h-48 w-96 items-center object-none"
                src="https://source.unsplash.com/man-in-black-jacket-and-brown-pants-lying-on-snow-covered-ground-during-daytime-q80sx583gzE"
                alt=""
              />
              <p className="font-medium">
                Here you can by some ajvar for your brekfast!!
              </p>
            </section>
          </main>
        </div>

        <footer className="sticky bottom-0 flex justify-center gap-8">
          © Nicknamer 2024
          <a className="hover:underline" href="https://github.com/NicknamerSRB">
            Github
          </a>
        </footer>
      </div>
    </>
  )
}

export default App
