import { useEffect } from 'react';

// 카카오톡 공유하기

const Layout = ({ children }) => {
  useEffect(() => {
      window.Kakao.init('93c966f296f9a9d06923fc5777462191');
  }, []);

  return (
      <>
        {children}
      </>
  );
};

export default Layout;