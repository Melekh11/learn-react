import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="найти..."
            >
                {}
            </MyInput>
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="сортировка по"
                options={[
                    {name: "Сортировка по тайтлу", key: "title"},
                    {name: "Сортировка по содержимому", key: "body"}
                ]}>
            </MySelect>
        </div>
    );
};

export default PostFilter;