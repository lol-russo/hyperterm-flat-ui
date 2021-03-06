
const backgroundColor = '#34495e'
const foregroundColor = '#ecf0f1'
const cursorColor = '#bdc3c7'
const borderColor = backgroundColor

const colors = [
  backgroundColor,
  '#e74c3c',
  '#2ecc71',
  '#f1c40f',
  '#3498db',
  '#8e44ad',
  '#56b6c2',
  '#bdc3c7',
  '#95a5a6',
  '#e74c3c',
  '#2ecc71',
  '#f1c40f',
  '#3498db',
  '#8e44ad',
  '#56b6c2',
  '#ffffff',
  foregroundColor
]

exports.decorateConfig = config => {
  console.log('Hi mom!')

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: ``,
    css: `
      ${config.css || ''}
      .header_header {
        top: 0;
        right: 0;
        left: 0;
      }
      .tabs_list {
        background-color: #2c3e50 !important;
        border-bottom-color: #2c3e50 !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        background-color: ${backgroundColor};
        border-color: ${backgroundColor};
      }
      .tab_tab.tab_active::before {
        border-bottom-color: ${backgroundColor};
      }
    `
  })
}
