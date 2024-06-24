import React, { useEffect, useRef, useState } from 'react'
import { useAppDispatch } from '../../../hooks/useStore';
import { apiSearchProducts } from '../../../features/farm-manage/manage-farm.action';
import { setSearchTerm } from '../../../features/farm-manage/prds.slice';

type Props = {}

const SearchBar = ({ onFocusChange }) => {
    const dispatch = useAppDispatch();
    const [inputValue, setInputValue] = useState('');
    const [debouncedValue, setDebouncedValue] = useState(inputValue);
    const inputRef = useRef(null);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, 100);

        return () => {
            clearTimeout(handler);
        };
    }, [inputValue]);

    useEffect(() => {
        if (debouncedValue) {
            dispatch(setSearchTerm(debouncedValue));
            dispatch(apiSearchProducts(debouncedValue));
            onFocusChange(true); // Hiển thị kết quả tìm kiếm
        } else {
            onFocusChange(false); // Ẩn kết quả tìm kiếm khi giá trị rỗng
        }
    }, [debouncedValue, dispatch, onFocusChange]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                onFocusChange(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onFocusChange]);

    const handleSearch = (term) => {
        setInputValue(term);
        if (term === '') {
            onFocusChange(false);
        }
    };
    return (
        <>
            <div className='flex-auto pt-6'>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative ml-12 mr-4">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-1 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 ml-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input value={inputValue}
                        onFocus={() => onFocusChange(true)}
                        ref={inputRef}
                        onChange={(e) => handleSearch(e.target.value)} type="text" className="block w-full pt-3 pr-4 pb-3 pl-[54px] ps-10 text-sm text-gray-900 shadow-lg bg-gray-50 rounded-2xl" placeholder="Tìm kiếm sản phẩm" required />
                    <button type="submit" className="border-l border-gray-300 absolute end-2.5 bottom-1.5 font-medium text-base text-green-light px-3 py-1">Tìm kiếm</button>
                </div>
            </div>
        </>
    )
}

export default SearchBar