import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx'
import { CoreConcept, CoreConceptShortSyntax } from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  function handleSelect(selectedButton) {
    console.log(`${selectedButton} selected`);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              image={CORE_CONCEPTS[0].image}
              description={CORE_CONCEPTS[0].description}
            />
            {/* ... spread operator expands object into key value pairs */}
            {/* Or iterables into it's individual elements */}
            <CoreConceptShortSyntax {...CORE_CONCEPTS[1]} />
            <CoreConceptShortSyntax {...CORE_CONCEPTS[2]} />
            <CoreConceptShortSyntax {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("Components")}>Componenets</TabButton>
            <TabButton onSelect={() => handleSelect("Jsx")}>Jsx</TabButton>
            <TabButton onSelect={() => handleSelect("Props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("State")}>State</TabButton>
          </menu>

        </section>
      </main>
    </div>
  );
}

export default App;
