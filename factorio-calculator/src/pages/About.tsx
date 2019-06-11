import React from "react";

const AboutPage: React.SFC<{}> = props => {
  return (
    <div>
      This calculator is based on the Kirk McDonald's Calculator. It is licensed under
      the Apache License 2.0, and its source may be{" "}
      <a href="https://github.com/antomarsi/kirkmcdonald.github.io">
        found on github, here
      </a>
      .
      <p>
        This calculator is the result of a few years' worth of fooling around,
        off and on, with performing calculations using Factorio's recipe graph.
        You may find an essay on the subject, which outlines the techniques used
        in this calculator,{" "}
        <a href="http://kirkmcdonald.github.io/posts/calculation.html">here</a>.
      </p>
      <p>Features of this calculator include:</p>
      <ul>
        <li>
          Proper handling of oil products. Obtaining numbers for these recipes
          can be tricky, as several of the items involved may be produced from
          multiple recipes.
        </li>
        <li>Support for modules, including beacons.</li>
        <li>Support for the mining productivity bonus, introduced in 0.15.</li>
        <li>Support for "expensive" mode.</li>
        <li>
          Arbitrary numerical precision. Calculations are performed using bigint
          rationals, so errors from floating-point calculations should not be an
          issue.
        </li>
        <li>Support for multiple simultaneous outputs.</li>
        <li>May display rates per second, minute, or hour.</li>
      </ul>
    </div>
  );
};

export default AboutPage;
