import useScreenSize from './useScreenSize';

// Hook to determine if the screen size is considered mobile
const useIsMobile = () => {
  const screenSize = useScreenSize();
  return screenSize.width <= 768;
};

export default useIsMobile;