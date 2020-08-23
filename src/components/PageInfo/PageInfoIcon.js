import React from 'react';

function PageInfoIcon({ handleOpen }) {
    return (
        <div className="page_info_icon"
            onMouseEnter={handleOpen}
        >
            <i className="fas fa-info-circle"></i>
        </div>
    )
}

export default PageInfoIcon;

