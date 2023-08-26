let minWidth;

export const detectLabtoptSize = () => {
  minWidth = 980;
  return window.innerWidth <= minWidth;
}

export const detectTabletSize = () => {
  minWidth = 768;
  return window.innerWidth <= minWidth;
}

export const detectMobileSize = () => {
  minWidth = 481;
  return window.innerWidth <= minWidth;
}

export const detectOldSize = () => {
  minWidth = 320;
  return window.innerWidth <= minWidth;
}