import {
  Navbar,
  Header,
  About,
  Experience,
  Projects,
  Education,
  Skills,
  OtherPrograms,
} from "./components/Profile";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-10">
        <Header />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <OtherPrograms />
      </main>
    </div>
  );
}

export default App;
