type Props = {
  error?: string
}

const BasicError = ({ error }: Props) => {
  return error ? <div className="text-red-600">{error}</div> : null
}

export default BasicError
