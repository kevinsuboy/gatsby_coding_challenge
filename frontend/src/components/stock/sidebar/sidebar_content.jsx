import React from 'react';

const SidebarContent = ({ footer, theme, ...props }) => {
  const colorTheme = setOverlay(theme);

  return (
    <div className="sidebar-container">
      I AM THE SIDEBAR
      {/* <div className={`${styles.container} ${colorTheme}`}>
        <div className={styles.outer}>
          <div className={styles.inner}>
            <div className={styles.scroll}>{props.children}</div>
          </div>
        </div>
      </div>
      {footer} */}
    </div>
  );
};

export default SidebarContent;
