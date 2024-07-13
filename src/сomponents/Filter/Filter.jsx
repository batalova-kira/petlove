import React, { useState } from "react";

import { BtnLoupe, InputFilter, WrapperFilter } from "./Filter.styled";
import Icon from "../Icon/Icon";

export const Filter = ({ onFilterSubmit }) => {
    const [filterWord, setFilterWord] = useState("");

    const handleFilterChange = (event) => {
        setFilterWord(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onFilterSubmit(filterWord);
    };

    return (
        <WrapperFilter onSubmit={handleSubmit}>
            <InputFilter
                type="text"
                value={filterWord}
                onChange={handleFilterChange}
                placeholder="Введіть слово для фільтрації"
            />
            <BtnLoupe type="submit">
                <Icon name="green-success" width={18} height={18} />
            </BtnLoupe>
        </WrapperFilter>
    );
};
