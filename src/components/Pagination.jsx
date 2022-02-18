import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'
import colors from '../utils/constants'

const productsPerPage = 12

const StyledPagination = styled(ReactPaginate)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  padding: 32px 32px 16px 32px;
  margin: 0;
  gap: 4px;
  li {
    height: 32px;
    min-width: 40px;
    border-radius: 32px;
    border: ${colors.primary} 2px solid;
    cursor: pointer;
    text-align: center;
    overflow: hidden;
  }
  li a {
    display: flex;
    flex: 1;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  li.active {
    background-color: ${colors.primary};
    color: ${colors.white};
  }
  li.disabled {
    color: ${colors.grayDark};
    border-color: ${colors.grayMid};
  }
  li.disable,
  li.disabled a {
    cursor: not-allowed;
  }
`

const Pagination = ({ data, setItems }) => {
  const [itemOffset, setItemOffset] = useState(0)
  const [pageCount, setPageCount] = useState(0)

  useEffect(() => {
    const endOffset = itemOffset + productsPerPage
    setItems(data.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(data.length / productsPerPage))
  }, [itemOffset, data, setItems])

  const handlePaginationClick = (event) => {
    const newOffset = (event.selected * productsPerPage) % data.length
    setItemOffset(newOffset)
  }

  return (
    <StyledPagination
      nextLabel="⮕"
      onPageChange={handlePaginationClick}
      pageRangeDisplayed={1}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      previousLabel="⬅"
      breakLabel="..."
      activeClassName="active"
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagination
