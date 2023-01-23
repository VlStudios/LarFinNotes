import { useDispatch } from "react-redux";
import AllCards from "../source/components/CategoryCard/AllCards";
import Header from "../source/components/Header/Header";
import Transactions from "../source/components/Transactions/Transactions";
import useGetDocs from "../source/hooks/useGetDocs";
import { setCategories, setPagments, setTransactions } from "../source/store/app-slice";
import styles from '../styles/initial.module.scss';

export default function Home() {
  const dispatch = useDispatch();
  dispatch(setCategories(useGetDocs('categorias')));
  dispatch(setTransactions(useGetDocs('transactions')));

  return (
    <main className={styles.main}>
   <Header/>
   <AllCards/>

   </main>
  );
}
