import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Header from '../components/header'

const PageRedirectable = () => {
  const router = useRouter()
  const [counter, setCounter] = useState(3);
  const unit = counter === 1 ? 'segundo' : 'segundos';
  const { redirect } = router.query

  useEffect(() => {
    
    if (counter) {
      setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);
    } else {
      window.location = `https://tuaagenda.com/${redirect}`;
    }
    
  }, [redirect, counter]);

  return (
    <>
      <Header />
      <h1>Vai redirecionar em {counter} {unit} para: {redirect}</h1>
    </>
  )
}

export default PageRedirectable
