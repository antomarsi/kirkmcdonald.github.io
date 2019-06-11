import React from "react";

const FaqPage: React.SFC<{}> = props => {
  return (
    <div>
      <h3>
        Do the numbers in the "beacons" column represent the number of modules
        or the number of beacons?
      </h3>
      They represent the number of modules.
      <h3>What does clicking on an item's icon in the "Factory" tab do?</h3>
      It omits the dependencies of that item's recipe from the solution. The
      intent behind this feature is to model the case of building a factory when
      you are shipping in one or more ingredients from elsewhere. For example,
      if you are making an advanced circuit factory and want to ship in
      electronic circuits, and want to see the remaining copper cable
      requirements on their own.
      <p>Clicking on the icon a second time will restore its dependencies.</p>
      <p>
        This feature is not compatible with certain items, namely those that
        have no dependencies, and those that don't map one-to-one with a recipe.
      </p>
      <h3>How do I interpret the pipe numbers on the "Factory" tab?</h3>
      Pipe throughput is inversely proportional to the length of the pipe. This
      means that the longer a pipe is, the more parallel lanes of pipes will be
      required.
      <p>
        Say the solution calls for 7500 units of heavy oil per second. With the
        default "minimum pipe length" setting, the calculator will display a
        value of "[pipe] &times; 7 &le; 47." This means you will need seven
        parallel lanes of pipes, each with a maximum length of 47 segments.
      </p>
      <p>
        The "minimum pipe length" setting controls the minimum number of
        segments that a pipe will be permitted before the calculator uses
        multiple lanes of pipes. It defaults to 17, which corresponds to a fluid
        rate of 1200/s, which is the output rate of an offshore pump.
      </p>
      <p>The number of pipes will be omitted if only one pipe is required.</p>
      <h3>How can I give you money?</h3>
      <a href="https://www.patreon.com/kirkmcdonald">I'm on Patreon.</a> Thanks!
    </div>
  );
};

export default FaqPage;
