import CreonPassLeft from "../molecules/CreonPassLeft";
import CreonPassRight from "../molecules/CreonPassRight";

export default function CreonPass() {
    return (
      <section className="flex xl:px-[190px] ">
            <CreonPassLeft />
            <CreonPassRight />
      </section>
    );
}