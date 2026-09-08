import Course from "../components/Home/Course.jsx";
import courses from "../data/courses.js";

const Home = () => {
  return (
    <div
      id="root"
      className="grid my-40 grid-cols-4 max-w-300  mx-auto gap-5 relative z-50"
    >
      {courses.map((course) => {
        return <Course key={course.id} {...course} />;
      })}
    </div>
  );
};

export default Home;
