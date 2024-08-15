import { PUBLIC_BASE_URL } from "../../api/axiosInstance";

const NotFound = () => {
  return (
    <main className="bg-main-green-300 flex flex-col items-center gap-4 py-12">
      <img src={PUBLIC_BASE_URL + "images/404.svg"} alt="404 icon" />
    </main>
  );
};

export default NotFound;
