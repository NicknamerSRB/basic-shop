import { ReactNode } from 'react'
import BasicError from './BasicError'

export type TableConfig<T> = {
  component?: ReactNode | ((props: { data: T }) => JSX.Element)
  field?: keyof T
  label: string
}[]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Data = ({ id: string } & any)[]

type Props = {
  className?: string
  data: null | Data
  error: string
  isLoading: boolean
  tableConfig: TableConfig<Data[0]>
}

const Table = ({ tableConfig, data, isLoading, error }: Props) => {
  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <BasicError error={error} />
  }
  return (
    <div className="overflow-x-auto">
      <table className="bg-gray min-w-full divide-y divide-gray-200 rounded-lg shadow-md">
        <thead>
          <tr>
            {tableConfig.map((conf, i) => {
              const { label } = conf
              return (
                <th key={i}>
                  <p>{label}</p>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((singleData) => (
            <tr key={singleData.id}>
              {tableConfig.map((conf, i) => {
                const { field, component } = conf
                const Component =
                  typeof component === 'function'
                    ? component({ data: singleData })
                    : component
                return (
                  <td key={`${singleData.id} ${i}`}>
                    {field ? singleData[field] : Component}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
