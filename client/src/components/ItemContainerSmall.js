import React from "react";
import styled from "styled-components";

const ItemContainerSmall = () => {
    return (
        <SmallItemView>
            This is the small item container. Will add: image, name, price, cart icon.
        </SmallItemView>
    )
};

const SmallItemView = styled.div`
    border: 3px solid gray;
    border-radius: 8px;
    width: 225px;
    height: 275px;
`;

export default ItemContainerSmall;
