import React, { useEffect, useState } from 'react';
import { Select, Space } from 'antd';
import type { SelectProps } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../hooks/useStore';
import { apiGetAllCate, apiGetDetailProductById } from '../../../features/farm-manage/manage-farm.action';
import { useParams } from 'react-router-dom';



const MultiSelect: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const allCategories = useAppSelector((state: any) => state.category.result)
    const local: any = localStorage.getItem("account")
    const getIdLocal = JSON.parse(local);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(apiGetAllCate(getIdLocal.id))
    }, [dispatch])

    const options = allCategories?.result?.categoryList.map((category: any) => ({
        value: category.id,
        label: category.name,
    }));
    const { id } = useParams<{ id: string }>();

    const detailProduct = useAppSelector((state: any) => state.products)
    useEffect(() => {
        if (id) {
            dispatch(apiGetDetailProductById(Number(id)));
        }
    }, [dispatch, id]);
    const item = detailProduct.result?.result
    // const productCategoryIds = item?.categories;

    // const selectedCategoriesName = allCategories?.result?.categoryList.filter(cat =>
    //     productCategoryIds?.includes(cat.id)
    // ).map(cat => cat.name);

    return (<Space style={{ width: '100%' }} direction="vertical">
        <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Chọn danh mục"
            // defaultValue={selectedCategoriesName ? selectedCategoriesName : []}
            // onChange={(value) => {
            //     props.onChange(value);
            // }}
            // onChange={handleChange}
            options={options}
            {...props as any}
        />
    </Space>
    );
}

export default MultiSelect;