import React from 'react';
import {NavLink} from 'react-router-dom';
import {Box, Pagination, PaginationItem} from '@mui/material';

export const Paginator = (props) => {
    const { itemsCount, page, setPage, limit } = props;

    const pagesCount = Math.floor(itemsCount / limit);

    return <Box display="flex" justifyContent="center" padding="10px">
        <Pagination
            count={pagesCount}
            onChange={(e, num) => {
                setPage(num)
            }}
            page={page}
            renderItem={(item) => (
                <PaginationItem
                    component={NavLink}
                    to={`/?page=${item.page}`}
                    {...item}
                />
            )}
        />
    </Box>
}