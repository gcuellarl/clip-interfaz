import { useRouter } from 'next/router';

const redirectTo = '/menu1';

const Index = () => {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    router.push(redirectTo);
  }
  return <></>;
};



export default Index;