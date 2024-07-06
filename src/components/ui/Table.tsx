import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Table = ({ children }: Props) => {
  return (
    <div className="overflow-x-auto">
      <table className="bg-gray min-w-full divide-y divide-gray-200 rounded-lg shadow-md">
        {children}
      </table>
    </div>
  )
}

export default Table
