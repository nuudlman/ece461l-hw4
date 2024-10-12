import Project from "./components/Project";
import Projects from "./components/Projects";
export default function App() {

  return (
    <>
        <Projects>
          {
            Array
              .from({ length: 30 }, (_, index) => 0 + index)
              .map((idx) => {
                return {
                  name: `Project Name ${idx}`,
                  hardware: [
                    100, 100
                  ]
                }
              })
              .map((row) => (
                <Project name={row.name} hardware={row.hardware}/>
              ))
          }
        </Projects>
    </>
  )
}