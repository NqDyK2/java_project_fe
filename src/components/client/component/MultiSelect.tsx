import React, { useEffect } from 'react';
import { Select, Space } from 'antd';
import type { SelectProps } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../hooks/useStore';
import { apiGetAllCate } from '../../../features/farm-manage/manage-farm.action';



const MultiSelect: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const allCategories = useAppSelector((state: any) => state.category.result)
    const local: any = localStorage.getItem("account")
    const getIdLocal = JSON.parse(local);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(apiGetAllCate(getIdLocal.id))
    }, [dispatch])

    const options = Object.values(allCategories.result?.categoryList).map((category: any) => ({
        value: category.id,
        label: category.name,
    }));
    return (<Space style={{ width: '100%' }} direction="vertical">
        <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Please select"
            // defaultValue={['a10', 'c12']}
            // onChange={handleChange}
            options={options}
            {...props as any}
        />
    </Space>
    );
}

export default MultiSelect;