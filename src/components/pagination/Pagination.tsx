import React, { FC } from 'react';
import { PaginationOptions, PaginationParamType } from '../../api/types';
import './pagination.scss';
import cn from 'classnames';
import { IoChevronBackOutline, IoChevronForward, IoPlayBackOutline, IoPlayForwardOutline } from 'react-icons/io5';

type PaginationPropsType = {
  paginationOptions: PaginationOptions
  setPaginationParam: (paginationParam: PaginationParamType) => void
}

export const Pagination: FC<PaginationPropsType> = ({ paginationOptions, setPaginationParam }) => {

  const {
    current_page,
    limit_per_page,
    next_page,
    prev_page,
    total_pages,
  } = paginationOptions;

  return (
    <div className="pagination_container">
      <div className="pagination_arrows">
        {current_page > 2 &&
        <div className="pagination_arrows-container">
          <div onClick={() => {setPaginationParam({ itemsCount: limit_per_page, currentPage: 1 });}}>
            <IoPlayBackOutline />
          </div>
          <div onClick={() => {setPaginationParam({ itemsCount: limit_per_page, currentPage: prev_page });}}>
            <IoChevronBackOutline />
          </div>
        </div>}
      </div>
      <div className="pagination_pages">
        {[prev_page, current_page, next_page].map((el, index) => <div
          className={cn({ active: current_page === el })}
          onClick={() => {current_page !== el && setPaginationParam({ itemsCount: limit_per_page, currentPage: el });}}
          key={index}>
          {el}
        </div>)}
      </div>
      <div className="pagination_arrows">
        {current_page < total_pages - 1 &&
        <div className="pagination_arrows-container">
          <div onClick={() => {setPaginationParam({ itemsCount: limit_per_page, currentPage: next_page });}}>
            <IoChevronForward />
          </div>
          <div onClick={() => {setPaginationParam({ itemsCount: limit_per_page, currentPage: total_pages });}}>
            <IoPlayForwardOutline />
          </div>
        </div>}
      </div>
    </div>
  );
};
