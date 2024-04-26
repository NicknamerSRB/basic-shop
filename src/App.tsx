import ShoppingBag from '@/assets/ShoppingBag.svg?react'
import StyledLink from './components/ui/StyledLink'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-500">
      <header className="fixed inset-x-0 top-0">
        <div className="container mx-auto">
          <nav>
            <ul className="flex items-center justify-center gap-3">
              <li>
                <StyledLink href="/home">Home</StyledLink>
              </li>
              <li>
                <StyledLink href="/store">Store</StyledLink>
              </li>
              <li>
                <StyledLink href="/page">Page</StyledLink>
              </li>
              <ShoppingBag
                href="/cart"
                className="absolute right-6 hover:bg-gray-400"
              />
            </ul>
          </nav>
        </div>
      </header>

      <main className="mt-[32px] grow">
        <section>
          <div className="container mx-auto">
            <h1 className="text-4xl font-extrabold">Shop Ajvara</h1>
            <img
              className="h-48 w-96 items-center object-cover"
              src="https://source.unsplash.com/a-close-up-of-a-red-pepper-with-a-green-stalk-a3coY0CSMy4"
              alt=""
            />
            <p className="font-medium">
              Here you can by some ajvar for your brekfast!!
            </p>
          </div>
        </section>
      </main>

      <footer>
        <div className="container mx-auto flex justify-center">
          <p>
            © Nicknamer 2024
            <a
              className="hover:underline"
              href="https://github.com/NicknamerSRB"
            >
              Github
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
