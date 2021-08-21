import Loader from 'react-loader-spinner';
import { LoaderDiv } from './Loader.styled';
const Spinner = () => (
  <LoaderDiv>
    <Loader type="Bars" color="#00BFFF" height={80} width={80} />
  </LoaderDiv>
);
export default Spinner;
