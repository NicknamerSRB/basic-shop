type Props = {
  children: React.ReactNode
}

const Heading = ({ children }: Props) => {
  return <h1 className="mb-4 text-3xl font-bold">{children}</h1>
}

export default Heading
