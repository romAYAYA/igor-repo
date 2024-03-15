import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Box } from '@mui/material'
import { IData } from '../schemas/IData.ts'
import React from 'react'

interface IProps {
  data: IData[]
  totalSum: number
}

const TableComponent: React.FC<IProps> = ({ data, totalSum }) => {
  return (
    <>
      <TableContainer component={ Paper }>
        <Table sx={ { minWidth: 650 } } aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Date created</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">File</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { data.map((row) => (
              <TableRow
                key={ row.id }
                sx={ { '&:last-child td, &:last-child th': { border: 0 } } }
              >
                <TableCell component="th" scope="row">
                  { row.username }
                </TableCell>
                <TableCell align="right">{ row.date }</TableCell>
                <TableCell align="right">{ parseFloat(row.total) }</TableCell>
                <TableCell align="right"><a href={ `/static/${ row.file_path }` }>File</a></TableCell>
              </TableRow>
            )) }
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={ { alignSelf: 'end' } }>Total: { totalSum }</Box>
    </>
  )
}

export default TableComponent