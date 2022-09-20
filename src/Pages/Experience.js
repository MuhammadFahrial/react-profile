import React from "react";
import Work from "../Components/Work";
import { workDetails, eduDetails } from "../Details";

class Experience extends React.Component {
  render() {
    return (
      <>
        <main className="container mt-8">
          <section>
            <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
              Work Experience
            </h1>
            {React.Children.toArray(
              workDetails.map(
                ({ Position, Company, Location, Type, Duration }) => (
                  <Work
                    position={Position}
                    company={Company}
                    location={Location}
                    type={Type}
                    duration={Duration}
                  />
                )
              )
            )}
          </section>
          <section>
            <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
              Education
            </h1>
            {React.Children.toArray(
              eduDetails.map(
                ({ Position, Company, Location, Type, Duration }) => (
                  <Work
                    position={Position}
                    company={Company}
                    location={Location}
                    type={Type}
                    duration={Duration}
                  />
                )
              )
            )}
          </section>
        </main>
      </>
    );
  }
}

export default Experience;
