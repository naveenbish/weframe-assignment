import Content from "@components/Content";
import Sidebar from "@components/Sidebar";
import Nav from "@components/Nav";

const Home = () => (
  <div className="flex">
      <div className="w-[290px] bg-[color:#15132b]">
       <Sidebar />
      </div>
      <div className="w-screen">
        <Nav />
        <Content />
      </div>
  </div>
);

export default Home;
