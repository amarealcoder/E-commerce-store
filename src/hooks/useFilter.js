import { useGetProductsQuery } from '../services/productsApi';

export default function useFilter(arr, comp) {
  const {  isSuccess, data } = useGetProductsQuery();

  // store the comparison  values in array
  const unique =
    isSuccess &&
    data &&
    arr
      .map((e) => e[comp])

      // store the indexes of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the false indexes & return unique objects
      .filter((e) => arr[e])
      .map((e) => arr[e]);

  return unique;
}