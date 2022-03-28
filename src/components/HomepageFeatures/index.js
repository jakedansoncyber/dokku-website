import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Tutorials',
    Svg: require('@site/static/img/Security2.svg').default,
    description: (
      <>
        Videos and documentations on projects that I have completed or explored will be found in the docs section.
      </>
    ),
  },
  {
    title: 'Learn with me',
    Svg: require('@site/static/img/Security3.svg').default,
    description: (
      <>
        This website was designed to incorporate my learnings in the IT security world, into your daily life! Join me
        as I traverse the never ending world of cybersecurity.
      </>
    ),
  },
  {
    title: 'Teach me',
    Svg: require('@site/static/img/Security4.svg').default,
    description: (
      <>
        There's always something to learn. If you've explored anything posted on this website, or explored something new, I'd love to connect!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
