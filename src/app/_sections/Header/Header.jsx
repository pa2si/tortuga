import Navbar from './_components/Navbar/Navbar';
import { getFetchData } from '@/utils/fetchingData';

const Header = async () => {
  const storyData = await getFetchData();

  return (
    <header>
      <Navbar fetchedData={storyData.nav_section} />
    </header>
  );
};
export default Header;
