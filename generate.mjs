import { mkdir, rm, writeFile } from "node:fs/promises";

const componentTemplate = (index) => {
  const name = `Component_${index}`;
  return `import styles from "./${name}.module.css";
const ${name} = () => (
  <div className={styles.otherClassName}>${name}</div>
);
export default ${name};`;
};
const styleTemplate = (index) => {
  return `.otherClassName {
  composes: className from "../global.module.css";
}

${Array.from({ length: 100 }, (_, i) => `.class_${i} { color: red; }`).join('\n')}
`;
};

const generate = async (count) => {
  await rm("src/components", { recursive: true, force: true });
  await mkdir("src/components");
  for (let i = 1; i <= count; i++) {
    const index = i.toString().padStart(count.toString().length, "0");
    await writeFile(
      `src/components/Component_${index}.tsx`,
      componentTemplate(index)
    );
    await writeFile(
      `src/components/Component_${index}.module.css`,
      styleTemplate(index)
    );
  }
};

await generate(1_000);
