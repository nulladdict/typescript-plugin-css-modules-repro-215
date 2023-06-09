import styles from "./global.module.css";

const components = import.meta.glob<{ default: React.ComponentType<{}> }>(
  "./components/**/*.tsx",
  { eager: true }
);

function App() {
  return (
    <div className={styles.className}>
      {Object.entries(components).map(([path, Component]) => (
        <Component.default key={path} />
      ))}
    </div>
  );
}

export default App;
