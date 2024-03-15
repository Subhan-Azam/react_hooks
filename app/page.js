import Count from "@/(components)/counter/counter";
import RegistrationForm from "@/(components)/registration_form/registration_form";
import ScreenWidth from "@/(components)/screenWidth/screenWidth";
import Link from "next/link";


const Home = () => {
  return (
    <>
      <Count />
      <RegistrationForm />
      <ScreenWidth/>
      <i>
        <Link href='/clientSide'>Client Side</Link>
      </i>
    </>
  );
};

export default Home;
