import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Erprobt",
    Svg: require("@site/static/img/old.svg").default,
    description: (
      <>
        Alle Versuche wurden von mehreren Lehrpersonen im Unterricht getestet.
      </>
    ),
  },
  {
    title: "Offene Standards",
    Svg: require("@site/static/img/open.svg").default,
    description: (
      <>
        Der Code im Backend ist open source (GNU-License). Alle Versuche sind
        frei veraenderbar. TODO: Anleitung verlinken!
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
